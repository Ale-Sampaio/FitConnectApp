// treinoData.js
import Peito from "../assets/images/imagensTreinos/peito-1.jpg";
import Peito2 from "../assets/images/imagensTreinos/peito-2.jpg";
import Biceps from "../assets/images/imagensTreinos/Biceps1.jpg";
import Biceps1 from "../assets/images/imagensTreinos/biceps2.jpg";
import costas1 from "../assets/images/imagensTreinos/costas-1.jpg";
import costas2 from "../assets/images/imagensTreinos/costas-2.jpg";
import perna1 from "../assets/images/imagensTreinos/perna-1.jpg";
import perna2 from "../assets/images/imagensTreinos/perna-2.jpg";
import triceps1 from "../assets/images/imagensTreinos/triceps-1.jpg";
import yoga from "../assets/images/imagensTreinos/yoga1.jpg";
import grupo from "../assets/images/imagensTreinos/grupo1.jpg";
import EspecialFitConnect from "../assets/images/imagensTreinos/fitConnect1.jpg";

const treinoData = [
  {
    titulo: "Treino para Peitos",
    subtitulo: "Exercícios focados para Peito",
    imagemFundo: Peito,
    tela: "ListaTreino",
    tipoExercicio: "Peito",
    exercicios: [
      { titulo: "Supino Reto", descricao: "4 séries de 8-12 repetições" },
      { titulo: "Supino Inclinado", descricao: "3 séries de 10-15 repetições" },
      { titulo: "Crucifixo com Halteres", descricao: "3 séries de 12-15 repetições" },
      { titulo: "Pullover com Halteres", descricao: "3 séries de 12-15 repetições" },
    ],
  },
  {
    titulo: "Treino para Bíceps",
    subtitulo: "Exercícios intensos para Bíceps",
    imagemFundo: Biceps,
    tela: "ListaTreino",
    tipoExercicio: "Bíceps",
    exercicios: [
      { titulo: "Curl com Barra", descricao: "4 séries de 10-12 repetições" },
      { titulo: "Martelo com Halteres", descricao: "3 séries de 12-15 repetições" },
      { titulo: "Curl 21", descricao: "3 séries de 21 repetições" },
      { titulo: "Rosca Alternada", descricao: "3 séries de 12-15 repetições" },
    ],
  },
  {
    titulo: "Treino para Costas",
    subtitulo: "Exercícios focados para Lombar",
    imagemFundo: costas1,
    tela: "ListaTreino",
    tipoExercicio: "Costas",
    exercicios: [
      { titulo: "Levantamento Terra", descricao: "4 séries de 8-12 repetições" },
      { titulo: "Remada Curvada", descricao: "3 séries de 10-12 repetições" },
      { titulo: "Puxada Alta", descricao: "3 séries de 12-15 repetições" },
      { titulo: "Hiperextensão", descricao: "3 séries de 12-15 repetições" },
    ],
  },
  {
    titulo: "Treino para Pernas",
    subtitulo: "Exercícios para fortalecer as pernas",
    imagemFundo: perna1,
    tela: "ListaTreino",
    tipoExercicio: "Pernas",
    exercicios: [
      { titulo: "Agachamento Livre", descricao: "4 séries de 8-12 repetições" },
      { titulo: "Leg Press", descricao: "3 séries de 12-15 repetições" },
      { titulo: "Avanço com Barra", descricao: "3 séries de 10-12 repetições por perna" },
      { titulo: "Cadeira Extensora", descricao: "3 séries de 12-15 repetições" },
    ],
  },
  {
    titulo: "Treino para Tríceps",
    subtitulo: "Exercícios intensos para Tríceps",
    imagemFundo: triceps1,
    tela: "ListaTreino",
    tipoExercicio: "Tríceps",
    exercicios: [
      { titulo: "Tríceps Corda no Pulley", descricao: "4 séries de 10-12 repetições" },
      { titulo: "Fundos em Máquina", descricao: "3 séries de 12-15 repetições" },
      { titulo: "Tríceps Testa com Barra EZ", descricao: "3 séries de 10-12 repetições" },
      { titulo: "Extensão de Tríceps com Halteres", descricao: "3 séries de 12-15 repetições" },
    ],
  },
  {
    titulo: "Treino de Yoga",
    subtitulo: "Exercícios para relaxamento e flexibilidade",
    imagemFundo: yoga,
    tela: "ListaTreino",
    tipoExercicio: "Yoga",
    exercicios: [
      { titulo: "Postura da Criança", descricao: "3 séries de 30 segundos" },
      { titulo: "Cachorro Olhando para Baixo", descricao: "3 séries de 30 segundos" },
      { titulo: "Gato Vaca", descricao: "3 séries de 12 repetições" },
      { titulo: "Saudação ao Sol", descricao: "3 séries completas" },
    ],
  },
  {
    titulo: "Treino em Grupo",
    subtitulo: "Exercícios divertidos em equipe",
    imagemFundo: grupo,
    tela: "ListaTreino",
    tipoExercicio: "Grupo",
    exercicios: [
      { titulo: "Corrida em Grupo", descricao: "4 séries de 5 minutos" },
      { titulo: "Agachamento Sincronizado", descricao: "3 séries de 15 repetições" },
      { titulo: "Flexões em Dupla", descricao: "3 séries de 10 repetições" },
      { titulo: "Estafeta de Obstáculos", descricao: "3 séries completas" },
    ],
  },
  {
    titulo: "Treino Especial FitConnect",
    subtitulo: "Desafio Total para o Corpo",
    imagemFundo: EspecialFitConnect,
    tela: "ListaTreino",
    tipoExercicio: "Geral",
    exercicios: [
      { titulo: "Burpees", descricao: "4 séries de 15 repetições" },
      { titulo: "Mountain Climbers", descricao: "3 séries de 20 repetições por perna" },
      { titulo: "Flexão de Braço", descricao: "3 séries de 12-15 repetições" },
      { titulo: "Prancha Lateral", descricao: "3 séries de 30 segundos por lado" },
      { titulo: "Corrida Estacionária", descricao: "3 séries de 1 minuto" },
      { titulo: "Abdominais V-Ups", descricao: "3 séries de 15 repetições" },
      { titulo: "Saltos com Agachamento", descricao: "4 séries de 15 repetições" },
    ],
  },
  {
    titulo: "Treino para Peito",
    subtitulo: "Exercícios focados para Peito",
    imagemFundo: Peito2,
    tela: "ListaTreino",
    tipoExercicio: "Peito",
    exercicios: [
      { titulo: "Supino Reto", descricao: "4 séries de 8-12 repetições" },
      { titulo: "Supino Inclinado", descricao: "3 séries de 10-15 repetições" },
      { titulo: "Crucifixo com Halteres", descricao: "3 séries de 12-15 repetições" },
      { titulo: "Pullover com Halteres", descricao: "3 séries de 12-15 repetições" },
    ],
  },
  {
    titulo: "Treino para Bíceps",
    subtitulo: "Exercícios focados para Bíceps",
    imagemFundo: Biceps1,
    tela: "ListaTreino",
    tipoExercicio: "Bíceps",
    exercicios: [
      { titulo: "Curl Barra", descricao: "4 séries de 10-12 repetições" },
      { titulo: "Curl Alternado com Halteres", descricao: "3 séries de 12-15 repetições" },
      { titulo: "Martelo com Halteres", descricao: "3 séries de 12-15 repetições" },
      { titulo: "Scott", descricao: "3 séries de 10-12 repetições" },
    ],
  },
  {
    titulo: "Treinos para Costas",
    subtitulo: "Exercícios focados para Costas",
    imagemFundo: costas2,
    tela: "ListaTreino",
    tipoExercicio: "Costas",
    exercicios: [
      { titulo: "Levantamento Terra", descricao: "4 séries de 8-10 repetições" },
      { titulo: "Pull-up", descricao: "3 séries de 10-12 repetições" },
      { titulo: "Remada Curvada", descricao: "3 séries de 12-15 repetições" },
      { titulo: "Puxada Frontal", descricao: "3 séries de 12-15 repetições" },
    ],
  },
  {
    titulo: "Treino para Pernas",
    subtitulo: "Exercícios focados para Pernas",
    imagemFundo: perna2,
    tela: "ListaTreino",
    tipoExercicio: "Pernas",
    exercicios: [
      { titulo: "Agachamento Livre", descricao: "4 séries de 8-10 repetições" },
      { titulo: "Leg Press", descricao: "3 séries de 10-12 repetições" },
      { titulo: "Cadeira Extensora", descricao: "3 séries de 12-15 repetições" },
      { titulo: "Flexão de Pernas", descricao: "3 séries de 12-15 repetições" },
    ],
  }
];

export default treinoData;
