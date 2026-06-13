const db = require('../config/database');

const TABELA = 'equipamentos';
const UNIDADES_VALIDAS = ['Sede', 'Campus Norte', 'Campus Sul'];

const getAll = async (req, res) => {
  const { unidade } = req.query;

  if (unidade) {
    const [rows] = await db.query(`SELECT * FROM ${TABELA} WHERE unidade = ?`, [unidade]);
    return res.json(rows);
  }

  const [rows] = await db.query(`SELECT * FROM ${TABELA}`);
  res.json(rows);
};

const getById = async (req, res) => {
  const [rows] = await db.query(`SELECT * FROM ${TABELA} WHERE id = ?`, [req.params.id]);

  if (rows.length === 0) {
    return res.status(404).json({ erro: 'Equipamento não encontrado.' });
  }

  res.json(rows[0]);
};

const create = async (req, res) => {
  const { unidade, tipo_ativo, modelo, fabricante, setor, quantidade, valor } = req.body;

  if (!unidade || !tipo_ativo || !modelo || !fabricante || !setor || quantidade == null || valor == null) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' });
  }

  if (!UNIDADES_VALIDAS.includes(unidade)) {
    return res.status(400).json({ erro: `Unidade inválida. Use: ${UNIDADES_VALIDAS.join(', ')}` });
  }

  const [result] = await db.query(
    `INSERT INTO ${TABELA} (unidade, tipo_ativo, modelo, fabricante, setor, quantidade, valor) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [unidade, tipo_ativo, modelo, fabricante, setor, quantidade, valor]
  );

  const [novo] = await db.query(`SELECT * FROM ${TABELA} WHERE id = ?`, [result.insertId]);
  res.status(201).json(novo[0]);
};

const update = async (req, res) => {
  const [existe] = await db.query(`SELECT id FROM ${TABELA} WHERE id = ?`, [req.params.id]);

  if (existe.length === 0) {
    return res.status(404).json({ erro: 'Equipamento não encontrado.' });
  }

  const { unidade, tipo_ativo, modelo, fabricante, setor, quantidade, valor } = req.body;

  if (unidade && !UNIDADES_VALIDAS.includes(unidade)) {
    return res.status(400).json({ erro: `Unidade inválida. Use: ${UNIDADES_VALIDAS.join(', ')}` });
  }

  await db.query(
    `UPDATE ${TABELA} SET
      unidade = COALESCE(?, unidade),
      tipo_ativo = COALESCE(?, tipo_ativo),
      modelo = COALESCE(?, modelo),
      fabricante = COALESCE(?, fabricante),
      setor = COALESCE(?, setor),
      quantidade = COALESCE(?, quantidade),
      valor = COALESCE(?, valor)
    WHERE id = ?`,
    [unidade, tipo_ativo, modelo, fabricante, setor, quantidade, valor, req.params.id]
  );

  const [atualizado] = await db.query(`SELECT * FROM ${TABELA} WHERE id = ?`, [req.params.id]);
  res.json(atualizado[0]);
};

const remove = async (req, res) => {
  const [existe] = await db.query(`SELECT id FROM ${TABELA} WHERE id = ?`, [req.params.id]);

  if (existe.length === 0) {
    return res.status(404).json({ erro: 'Equipamento não encontrado.' });
  }

  await db.query(`DELETE FROM ${TABELA} WHERE id = ?`, [req.params.id]);
  res.json({ mensagem: 'Equipamento removido com sucesso.' });
};

module.exports = { getAll, getById, create, update, remove };