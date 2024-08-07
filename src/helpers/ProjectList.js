import ProjectChess from "../assets/project_chess.gif";
import ProjectTinyGPT from "../assets/project_tinygpt.gif";
import ProjectDNN from "../assets/project_dnn.png";
import ProjectDGM from "../assets/project_dgm.png";
import ProjectTSF from "../assets/project_tsf.png";
import ProjectGPRLS from "../assets/project_gprls.gif";
import ProjectMCTS from "../assets/project_mcts.gif";
import ProjectSARSA from "../assets/project_sarsa.gif";

export const ProjectList = [
  {
    name: "Chess AI",
    image: ProjectChess,
    description:
      "Hobby project during spring of 2024. I had played chess casually recently and wanted to learn more about chess programming. The aim of this project was to create a chess engine and AI bot from scratch. The AI bot was built on the minimax algorithm with alpha-beta pruning.",
    skills: "Python, NumPy, PyGame",
    githubLink: "https://github.com/AnmolS99/Chess-AI",
  },
  {
    name: "TinyGPT",
    image: ProjectTinyGPT,
    description:
      "Hobby project during summer of 2024 to get a more technical understanding of Transformers. Created a (very) small GPT (Generative Pretrained Transformer) model from scratch in Python, using Pytorch. This was done by following Andrej Karpathy's excellent YouTube tutorial.",
    skills: "Python, PyTorch",
    githubLink: "https://github.com/AnmolS99/TinyGPT",
  },
  {
    name: "Deep Neural Network Library",
    image: ProjectDNN,
    description:
      "This project was part of the Deep Learning (IT3030) course at NTNU spring 2022. The aim of this project was to create a deep neural network library from scratch and implement the backpropagation algorithm. Part of the project was also to generate data and test the neural network on it, as well as defining a format for config-files where neural net and data format could be specified.",
    skills: "Python, NumPy, Matplotlib",
    githubLink: "https://github.com/AnmolS99/Deep-Neural-Network",
  },
  {
    name: "Deep Generative Models",
    image: ProjectDGM,
    description:
      "This project was part of the Deep Learning (IT3030) course at NTNU spring 2022. The aim of this project was to create and compare two deep generative models: standard autoencoder and variational autoencoder (VAE). The models, as well as a verification neural network, were trained on the standard MNIST dataset. Each model has three different modes: Basic, Generative and Anomaly Detection.",
    skills: "Python, NumPy, Tensorflow Keras, Matplotlib",
    githubLink: "https://github.com/AnmolS99/Deep-Generative-Models",
  },
  {
    name: "Time Series Forecasting",
    image: ProjectTSF,
    description:
      "This project was part of the Deep Learning (IT3030) course at NTNU spring 2022. The goal of this project was to perform time series prediction by training a RNN model to predict electric power grid transmission system imbalance in east Norway.",
    skills: "Python, NumPy, Tensorflow Keras, Matplotlib",
    githubLink: "https://github.com/AnmolS99/Time-Series-Forecasting",
  },
  {
    name: "General Purpose RL System",
    image: ProjectGPRLS,
    description:
      "This project was part of the Artificial Intelligence Programming (IT3105) course at NTNU spring 2022. The aim of this project was to build a general purpose Actor-Critic Model (ACM) for Reinforcement Learning, and apply it to three different problems: pole balancing, Towers of Hanoi, and the gambler.",
    skills: "Python, NumPy, Tensorflow Keras, Matplotlib",
    githubLink: "https://github.com/AnmolS99/General-Purpose-RL-System",
  },
  {
    name: "MCTS Deep RL for Playing Games",
    image: ProjectMCTS,
    description:
      "This project was part of the Artificial Intelligence Programming (IT3105) course at NTNU spring 2022. The aim of this project was to implement a Monte Carlo Tree Search (MCTS) system and combine it with Reinforcement Learning (RL) and Deep Learning (DL) to play the board game Hex.",
    skills: "Python, NumPy, Tensorflow Keras, Matplotlib, NetworkX",
    githubLink: "https://github.com/AnmolS99/MCTS-Deep-RL",
  },
  {
    name: "Reinforcement Learning using SARSA Algorithm",
    image: ProjectSARSA,
    description:
      "This project was part of the Artificial Intelligence Programming (IT3105) course at NTNU spring 2022. The aim of this project was to create a reinforcement learning system using the SARSA-RL Algorithm to learn to play a simple physics game, named The Acrobat Game.",
    skills: "Python, NumPy, Tensorflow Keras, Matplotlib",
    githubLink: "https://github.com/AnmolS99/SARSA-RL",
  },
];
