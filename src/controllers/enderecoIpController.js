const db = require('../config/database');

const TABELA = 'enderecos_ip';

const getAll = async (req, res) => {
  const [rows] = await db.query(`SELECT * FROM ${TABELA}`);
  res.json(rows);
};

const getById = async (req, res) => {
  const [rows] = await db.query(`SELECT * FROM ${TABELA} WHERE id = ?`, [req.params.id]);

  if (rows.length === 0) {
    return res.status(404).json({ erro: 'Endereço IP não encontrado.' });
  }

  res.json(rows[0]);
};

const create = async (req, res) => {
  const { nome, endereco_ip, mascara, gateway, faixa_ip, dhcp } = req.body;

  if (!nome || !endereco_ip || !mascara || !faixa_ip) {
    return res.status(400).json({ erro: 'Campos nome, endereco_ip, mascara e faixa_ip são obrigatórios.' });
  }

  const [result] = await db.query(
    `INSERT INTO ${TABELA} (nome, endereco_ip, mascara, gateway, faixa_ip, dhcp) VALUES (?, ?, ?, ?, ?, ?)`,
    [nome, endereco_ip, mascara, gateway || null, faixa_ip, dhcp || null]
  );

  const [novo] = await db.query(`SELECT * FROM ${TABELA} WHERE id = ?`, [result.insertId]);
  res.status(201).json(novo[0]);
};

const update = async (req, res) => {
  const [existe] = await db.query(`SELECT id FROM ${TABELA} WHERE id = ?`, [req.params.id]);

  if (existe.length === 0) {
    return res.status(404).json({ erro: 'Endereço IP não encontrado.' });
  }

  const { nome, endereco_ip, mascara, gateway, faixa_ip, dhcp } = req.body;

  await db.query(
    `UPDATE ${TABELA} SET
      nome = COALESCE(?, nome),
      endereco_ip = COALESCE(?, endereco_ip),
      mascara = COALESCE(?, mascara),
      gateway = COALESCE(?, gateway),
      faixa_ip = COALESCE(?, faixa_ip),
      dhcp = COALESCE(?, dhcp)
    WHERE id = ?`,
    [nome, endereco_ip, mascara, gateway, faixa_ip, dhcp, req.params.id]
  );

  const [atualizado] = await db.query(`SELECT * FROM ${TABELA} WHERE id = ?`, [req.params.id]);
  res.json(atualizado[0]);
};

const remove = async (req, res) => {
  const [existe] = await db.query(`SELECT id FROM ${TABELA} WHERE id = ?`, [req.params.id]);

  if (existe.length === 0) {
    return res.status(404).json({ erro: 'Endereço IP não encontrado.' });
  }

  await db.query(`DELETE FROM ${TABELA} WHERE id = ?`, [req.params.id]);
  res.json({ mensagem: 'Endereço IP removido com sucesso.' });
};

module.exports = { getAll, getById, create, update, remove };