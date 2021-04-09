import React, { useRef, useState, useCallback, useEffect } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Switch from '../../components/Switch';

import api from '../../services/api';

import {
  AddProductContainer,
  AddProductContent,
  AnimationContainer,
  SwitchContainer,
} from './styles';

interface Category {
  id: string;
  category: string;
}

interface ProductsData {
  description: string;
  brand: string;
  quantity: string;
  category: Category;
  active: boolean;
}

const AddProduct: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    api.get<Category[]>('category').then((response) => {
      setCategory(response.data);
    });
  }, []);

  const handleSubmit = useCallback(async (data: ProductsData, { reset }) => {
    formRef.current?.setErrors({});
    await api.post('products', data);
    reset();
  }, []);

  return (
    <AddProductContainer>
      <AddProductContent>
        <h1>Cadastrar Produto</h1>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="description" placeholder="Descrição do Produto" />
            <Input name="brand" placeholder="Marca" />
            <Input name="quantity" placeholder="Quantidade" />
            <Select name="category">
              {category.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.category}
                </option>
              ))}
            </Select>
            <SwitchContainer>
              <h2>Ativo: </h2>
              <Switch name="active" />
            </SwitchContainer>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </AnimationContainer>
      </AddProductContent>
    </AddProductContainer>
  );
};

export default AddProduct;
