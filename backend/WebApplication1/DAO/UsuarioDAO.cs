using API_POUPAPORCO.MODEL;

using Dapper;

namespace API_POUPAPORCO.DAO
{
    public class UsuarioDAO
    {
        #region cadastro
        public void Cadastrar(Usuario usuario)
        {
            using var conexao = ConnectionFactory.Build();

            var sql = "insert INTO usuario (nome,senha) Values (@Nome,@Senha)";

            conexao.Execute(sql, usuario);
        }
        #endregion
        #region atualizar senha
        public void Atualizar(Usuario usuario)
        {
            using var conexao = ConnectionFactory.Build();

            var sql = "update usuarios SET nome = @Nome, senha = @Senha WHERE id = @id";

            conexao.Execute(sql, usuario);
        }
        #endregion
        #region excluir 
        public void Excluir(int Id)
        {
            using var conexao = ConnectionFactory.Build();

            var sql = "delete FROM usuario WHERE id = @Id";
            conexao.Execute(sql, Id);
        }
        #endregion
        #region puxar todos 
        public IEnumerable<Usuario> ObterTodos()
        {
            using var conexao = ConnectionFactory.Build();

            var sql = "SELECT * FROM usuario";

            return conexao.Query<Usuario>(sql);
        }
        #endregion
    }
}
