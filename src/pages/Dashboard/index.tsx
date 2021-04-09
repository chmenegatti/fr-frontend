import React, { useState, useEffect } from 'react';

import { FiPower } from 'react-icons/fi';
import { MdAddBox, MdEdit } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  TableContent,
  TableBody,
  ActionButtons,
} from './styles';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';
import ActionButton from '../../components/ActionButton';
import { useHistory } from 'react-router';

interface Category {
  id: string;
  category: string;
}
interface Products {
  id: string;
  description: string;
  brand: string;
  quantity: number;
  active: boolean;
  category: Category;
}

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const [products, setProducts] = useState<Products[]>([]);

  const history = useHistory();

  useEffect(() => {
    api.get<Products[]>('products').then((response) => {
      const prods = response.data;

      setProducts(prods);
    });
  }, []);

  const previlege = user.tipo.tipo;

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Profile>
            <div>
              <span>
                Bem-Vindo <strong>{user.name}</strong>
              </span>
              <span>{user.tipo.tipo}</span>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <div>
          <h1>Produtos Encontrados</h1>
          <ActionButtons icon={MdAddBox} onClick={() => history.push('/add')}>
            Adicionar
          </ActionButtons>
        </div>

        <TableContent>
          <TableBody>
            <table>
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Marca</th>
                  <th>Categoria</th>
                  <th>Quantidade</th>
                  <th>Ativo?</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item.id}>
                    <td>{item.description}</td>
                    <td>{item.brand}</td>
                    <td>{item.category.category}</td>
                    <td>{item.quantity}</td>
                    <td>{item.active === true ? 'Ativo' : 'Inativo'}</td>
                    <td>
                      <ActionButton icon={MdEdit} type="button" />
                      {previlege === 'Comum' ? (
                        ''
                      ) : (
                        <ActionButton icon={FaTrashAlt} type="button" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableBody>
        </TableContent>
      </Content>
    </Container>
  );
};

export default Dashboard;
