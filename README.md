# ⛩️ Automação E2E | SauceDemo

[![Playwright Tests](https://github.com/famartins/playwright-tests/actions/workflows/playwright.yml/badge.svg)](https://github.com/[SEU-USUARIO]/playwright-tests/actions)

Um projeto de automação de testes End-to-End (E2E) com foco em código limpo, manutenção simplificada e modularização. Desenvolvido para validar os fluxos principais da aplicação [Swag Labs (SauceDemo)](https://www.saucedemo.com/).

---

### 🛠️ Tecnologias

O projeto utiliza um stack moderno para testes web:

* **Linguagem:** JavaScript
* **Framework:** [Playwright](https://playwright.dev/)
* **CI/CD:** GitHub Actions

---

### 🏗️ Arquitetura

A estrutura foi pensada para respeitar o princípio **DRY** (*Don't Repeat Yourself*), separando os cenários de teste das funções auxiliares de interação com a interface.

```text
├── .github/workflows/   # Configuração da esteira de CI (GitHub Actions)
├── Functions/           # Funções modulares e reaproveitáveis (ex: login)
├── tests/               # Cenários de teste E2E (.spec.js)
├── playwright.config.js # Configurações globais do framework
└── package.json         # Dependências do projeto
