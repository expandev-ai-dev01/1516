import type { HomePageProps } from './types';

/**
 * @page HomePage
 * @summary Home page displaying welcome message and system overview
 * @domain core
 * @type page-component
 * @category public
 */
export const HomePage = (props: HomePageProps = {}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Bem-vindo ao DataFlow</h2>
        <p className="text-gray-600 text-lg">
          Sistema simples e intuitivo para gerenciamento de registros.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Criar Registros</h3>
          <p className="text-gray-600">
            Adicione novos registros com formulários intuitivos e validação de dados.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Visualizar</h3>
          <p className="text-gray-600">
            Consulte registros com filtros e ordenação para facilitar a busca.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Editar</h3>
          <p className="text-gray-600">
            Modifique registros existentes mantendo histórico de alterações.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Excluir</h3>
          <p className="text-gray-600">Remova registros com opções de exclusão lógica ou física.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
