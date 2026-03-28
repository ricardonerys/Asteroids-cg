# 🚀 Asteroids 2D com Canvas API

Projeto de computação gráfica desenvolvido em **JavaScript** utilizando a **Canvas API (2D)**, com o objetivo de implementar transformações geométricas, animação e interação em tempo real.

---

## 📌 Sobre o Projeto

Este projeto consiste na criação de um jogo inspirado no clássico **Asteroids**, onde o jogador controla uma nave espacial que pode:

* Rotacionar
* Se mover na direção do ângulo atual
* Atirar projéteis
* Destruir asteroides
* Evitar colisões

O foco principal está na aplicação de conceitos fundamentais de **Computação Gráfica 2D**.

---

## 🎯 Objetivos Acadêmicos

O projeto atende aos seguintes requisitos:

### ✔️ Transformações Geométricas

* **Translação (`ctx.translate`)**
* **Rotação (`ctx.rotate`)**
* **Escala (`ctx.scale`)**

### ✔️ Composição de Transformações

* Uso combinado de transformações (ex: translação + rotação)

### ✔️ Transformação com Ponto Fixo

* Aplicação do padrão:

```
T → Operação → T⁻¹
```

### ✔️ Animação

* Loop contínuo com `requestAnimationFrame`

### ✔️ Gerenciamento de Estado Gráfico

* Uso de `ctx.save()` e `ctx.restore()`

---

## 🧠 Conceitos Aplicados

* Sistema de coordenadas do Canvas
* Transformações afins
* Vetores com `Math.cos()` e `Math.sin()`
* Detecção de colisão (distância euclidiana)
* Game Loop (Update → Render)
* Manipulação de eventos de teclado

---

## 🎮 Funcionalidades

* 🚀 Nave controlada pelo jogador
* 🔄 Rotação baseada em ângulo
* 🔫 Sistema de tiros
* 🪨 Asteroides com movimento aleatório
* 💥 Colisão entre tiros e asteroides
* 💀 Sistema de Game Over
* 🔁 Reinício automático do jogo
* 📈 Animação de escala (asteroides “pulsando”)

---

## 🎹 Controles

| Tecla         | Ação                    |
| ------------- | ----------------------- |
| ⬅️ ArrowLeft  | Rotaciona para esquerda |
| ➡️ ArrowRight | Rotaciona para direita  |
| ⬆️ ArrowUp    | Move a nave para frente |
| ␣ Espaço      | Atirar                  |

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6)
* Canvas API (2D)

---

## 🧩 Estrutura do Projeto

```
📁 projeto-asteroids
│
├── index.html
├── asteroide.js
├── style.css
└── README.md

```

---

## 🔄 Lógica do Jogo

O jogo segue o padrão clássico de loop:

```
1. Limpar tela
2. Atualizar estados (movimento, colisões)
3. Aplicar transformações
4. Desenhar objetos
5. Repetir (requestAnimationFrame)
```

---

## 📐 Transformações no Projeto

### 🚀 Nave

* Translação + Rotação

### 🪨 Asteroides

* Escala dinâmica (animação)
* Transformação com ponto fixo

---

## 🧪 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
```

2. Abra o arquivo:

```bash
index.html
```

3. Execute no navegador

---

## 🚀 Possíveis Melhorias

* Sistema de pontuação
* Efeitos sonoros
* Partículas de explosão
* Física com inércia
* Menu inicial
* Sistema de vidas
* Asteroides fragmentando

---

## 📚 Referências

* MDN Web Docs — Canvas API
* Conceitos de Computação Gráfica 2D
* Jogos clássicos (Asteroids)

---

## 👨‍💻 Autores

Desenvolvido por **Willian Rodrigues e Ricardo Nery**
Projeto acadêmico de Computação Gráfica

---

## 📄 Licença

Este projeto é apenas para fins educacionais.
