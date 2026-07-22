# Adequação de websites à LGPD e marcos regulatórios no Brasil

## Visão geral

Este relatório apresenta um mapeamento dos principais requisitos legais e regulatórios aplicáveis a websites brasileiros quanto à proteção de dados pessoais, privacidade e uso de cookies, com foco na LGPD, Marco Civil da Internet e normas e guias de órgãos públicos.[^1][^2][^3]
São descritos os documentos e componentes que um site deve disponibilizar (política de privacidade, aviso de privacidade, política de cookies, termos de uso etc.), bem como práticas técnicas e organizacionais de adequação, organizadas em tabelas para facilitar implementação.[^4][^5][^6]

## Principais marcos regulatórios aplicáveis a websites

| Norma / Referência | Escopo principal | Impactos diretos em websites |
|--------------------|------------------|------------------------------|
| LGPD (Lei 13.709/2018) | Tratamento de dados pessoais por pessoas físicas e jurídicas de direito público ou privado em meios físicos ou digitais.[^3] | Define princípios, bases legais, direitos do titular, deveres de transparência, segurança, registro de consentimento e governança de dados que se materializam em políticas, avisos e mecanismos no site.[^3][^6] |
| Marco Civil da Internet (Lei 12.965/2014) | Direitos e deveres de usuários e provedores; responsabilidade de provedores de conexão e de aplicações; guarda de registros.[^1][^7] | Obrigações de transparência, preservação de registros de acesso, canais de atendimento, e parâmetros de responsabilização civil por conteúdos de terceiros hospedados ou veiculados na aplicação.[^1][^7] |
| Regulamentações e guias da ANPD e de órgãos públicos | Orientações sobre elaboração de políticas de privacidade, governança de dados e proteção no setor público.[^5][^2] | Fornecem modelos e requisitos mínimos de conteúdo para políticas, direitos dos titulares, prazos de retenção, contatos de encarregado, além de reforçar natureza obrigatória da LGPD também para sites de órgãos públicos.[^5][^2] |
| Normas setoriais (ex.: financeiro, saúde, educação) | Regras específicas de setores, muitas vezes complementando a LGPD com exigências próprias de segurança e confidencialidade.[^2] | Podem exigir cláusulas adicionais em políticas, níveis específicos de segurança e controles de acesso, bem como registros adicionais de consentimento.[^2] |

## Princípios da LGPD a refletir no site

A LGPD estabelece princípios que devem orientar toda atividade de tratamento de dados, incluindo coleta por formulários, cookies e logs de acesso em websites.[^3]
Entre eles, destacam-se: finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação e responsabilização, que devem transparecer nos textos de políticas e nas práticas técnicas e organizacionais.[^6][^3]

## Política de privacidade

A política de privacidade é o documento central para dar visibilidade ao tratamento de dados pessoais em determinado serviço ou site, atendendo aos princípios da LGPD.[^5][^8]
Ela deve ser disponibilizada em local de destaque, antes do início do tratamento, com linguagem clara e acessível, refletindo fielmente as práticas reais de tratamento de dados da organização.[^4][^5]

### Conteúdo mínimo recomendado

| Seção / Informação | Descrição | Base / Referência |
|--------------------|-----------|--------------------|
| Identificação do controlador | Nome completo da organização responsável pelo tratamento, CNPJ, endereço e canais de contato.[^5][^9] | LGPD e guias de elaboração de políticas de privacidade.[^5][^4] |
| Dados coletados e meios de coleta | Listagem dos dados pessoais coletados (nome, e-mail, IP, localização etc.), incluindo dados não fornecidos diretamente pelo usuário (logs, cookies).[^5][^8] | Transparência e necessidade na LGPD.[^3][^5] |
| Finalidades de tratamento | Para cada dado ou categoria, descrição clara da finalidade (cadastro, envio de newsletter, análise de navegação, segurança etc.).[^5][^8] | Princípio de finalidade e adequação da LGPD.[^3] |
| Bases legais | Indicação da base legal utilizada (consentimento, execução de contrato, cumprimento de obrigação legal/regulatória, legítimo interesse etc.).[^5][^6] | LGPD, art. sobre bases legais de tratamento.[^3] |
| Prazo de retenção | Informar por quanto tempo os dados são mantidos e critérios utilizados (prazo legal, relação contratual, análise de risco).[^5][^8] | Princípio de necessidade e prevenção.[^3] |
| Direitos dos titulares | Explicar como o usuário pode acessar, corrigir, excluir, portar seus dados, revogar consentimento, opor-se ao tratamento e obter informações sobre compartilhamentos.[^5][^6] | Direitos previstos na LGPD e práticas recomendadas.[^3][^5] |
| Encarregado / DPO | Indicar nome ou função e meios de contato do encarregado de proteção de dados (DPO).[^5][^9] | Exigência da LGPD e boas práticas de governança.[^3][^5] |
| Compartilhamento com terceiros | Informar se há compartilhamento com prestadores de serviço, parceiros, redes sociais ou provedores externos, bem como suas finalidades.[^5][^6] | Transparência na LGPD.[^3][^5] |
| Transferência internacional | Indicar se há transferência de dados para outros países ou serviços neles situados, explicando finalidade.[^5] | LGPD sobre transferência internacional de dados.[^3] |
| Tratamento por legítimo interesse | Descrever hipóteses de uso de legítimo interesse, com indicação das salvaguardas e avaliação de impacto.[^5][^6] | LGPD e recomendações de avaliação de legítimo interesse.[^3] |
| Decisões automatizadas | Explicar existência de perfis, decisões automatizadas e direito de revisão por pessoa natural.[^5] | LGPD sobre decisões automatizadas.[^3] |
| Dados sensíveis e de menores | Indicar como são protegidos dados sensíveis e de crianças/adolescentes, ou esclarecer que não são coletados.[^5] | LGPD sobre dados sensíveis e de crianças.[^3] |
| Uso de cookies | Indicar tipos de cookies utilizados e suas finalidades, podendo remeter à política de cookies separada.[^5][^10] | LGPD, guias sobre consentimento e cookies.[^3][^11] |
| Segurança da informação | Descrever em alto nível medidas de segurança empregadas (criptografia, controle de acesso, backups, monitoramento, políticas internas).[^6][^5] | Princípios de segurança e prevenção da LGPD.[^3] |
| Histórico de versões | Data da última atualização, versão do documento e, se possível, registro de principais alterações.[^5][^4] | Boas práticas de governança e transparência.[^5] |

## Aviso de privacidade

O aviso de privacidade é um texto mais conciso que apresenta de forma objetiva o que a empresa faz com os dados pessoais que coleta, geralmente exibido em formulários ou fluxos específicos de coleta.[^9]
Ele deve conter informações básicas como finalidade da coleta, tempo de armazenamento, contatos do controlador e encarregado e direitos do titular, servindo como ponto de entrada para a política de privacidade completa.[^9][^4]

## Política de cookies e consentimento

Cookies são arquivos que podem armazenar diversos dados sobre o usuário e potencialmente identificá-lo, estando sujeitos à LGPD.[^11][^12]
A coleta de dados pessoais por meio de cookies só pode ser feita com consentimento do usuário, que deve ser livre, informado, específico e inequívoco, não sendo válido consentimento obtido por meio de opt-out ou caixas pré-marcadas.[^12][^13]

### Estrutura recomendada para política de cookies

| Seção / Informação | Descrição | Base / Referência |
|--------------------|-----------|--------------------|
| Introdução | Explicar o que são cookies, por que o site os utiliza e relação com a LGPD.[^10][^11] | LGPD e boas práticas de transparência.[^3] |
| Tipos de cookies | Listar categorias (necessários, de desempenho, de funcionalidade, de marketing, de terceiros etc.).[^10][^11] | Recomendações de políticas de cookies.[^10] |
| Finalidade de cada cookie | Descrever claramente a finalidade de cada cookie ou grupo de cookies, incluindo se envolve rastreamento ou perfilhamento.[^10][^11] | Princípio de finalidade e necessidade da LGPD.[^3] |
| Base legal | Indicar bases legais para uso de cookies, especialmente consentimento para aqueles não estritamente necessários.[^10][^13] | LGPD sobre consentimento.[^3][^13] |
| Gestão de consentimento | Explicar como o usuário pode aceitar ou recusar cookies via banner, pop-up ou centro de preferências, inclusive alterar escolhas posteriores.[^10][^13] | Exigência de opt-in, opt-out fácil e registro de consentimento.[^13] |
| Desativação no navegador | Orientar usuário sobre como desativar cookies diretamente no navegador, se desejar.[^10] | Boas práticas de transparência.[^10] |
| Atualizações | Informar sobre periodicidade de revisão da política e como mudanças serão comunicadas.[^10][^11] | Governança de dados e transparência.[^10] |

### Banner e mecanismos de consentimento

Sob a LGPD, o consentimento precisa ser dado por meio de ação clara e afirmativa, com informação prévia concisa, transparente e facilmente acessível sobre os cookies utilizados.[^13]
Isso implica exibir um banner ou mecanismo equivalente que permita ao usuário optar pelo aceite de categorias de cookies (opt-in), registrar esse consentimento e oferecer facilidade para alteração ou revogação posterior.[^6][^13]

## Termos de uso

Termos de uso regulam a relação contratual entre usuário e provedor da aplicação, definindo regras de uso, responsabilidades, limitações e procedimentos para denúncias e remoção de conteúdo.[^1][^4]
Embora não sejam, em si, um instrumento de proteção de dados pessoais, devem dialogar com a política de privacidade e o Marco Civil da Internet no tocante à responsabilidade civil, guarda de registros e canais de atendimento.[^7][^1]

### Conteúdo típico de termos de uso

| Seção | Descrição | Base / Referência |
|-------|-----------|--------------------|
| Aceitação dos termos | Descrever que o uso do site implica concordância com os termos e mostrar o vínculo com política de privacidade e cookies.[^4] | Boas práticas de contratação eletrônica.[^4] |
| Registro e contas | Regras de criação de contas, credenciais de acesso, deveres do usuário quanto à guarda de senha, encerramento de contas.[^4][^1] | Marco Civil da Internet e práticas contratuais.[^1] |
| Conteúdos de terceiros | Regras sobre publicação de conteúdo pelo usuário (comentários, posts) e parâmetros de remoção mediante ordem judicial ou mecanismos internos de moderação.[^1][^7] | Parâmetros de responsabilidade de provedores no Marco Civil.[^1][^7] |
| Propriedade intelectual | Informações sobre direitos autorais, licenças e uso de conteúdo do site.[^4] | Normas de direito autoral e boas práticas.[^4] |
| Limitação de responsabilidade | Cláusulas que delimitam responsabilidade por indisponibilidade, erros e danos, respeitando legislações de proteção do consumidor e civil.[^4][^1] | Marco Civil e legislação consumerista.[^1] |
| Canais de contato | Indicação de canais para reclamações, pedidos de remoção, exercício de direitos de titulares, dúvidas sobre dados pessoais.[^4][^7] | Recomendação de canais permanentes e específicos de atendimento.[^7] |

## Direitos dos titulares e fluxos de atendimento

Websites devem viabilizar o exercício dos direitos dos titulares previstos na LGPD, como acesso, correção, exclusão, portabilidade, limitação do tratamento e revogação de consentimento.[^3][^6]
Isso envolve disponibilizar canais claros (formulário, e-mail, painel autenticado), definir fluxos internos para atendimento das demandas e informar tais mecanismos na política de privacidade e avisos.[^5][^6]

## Segurança da informação em websites

A LGPD exige adoção de medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão.[^3]
Para websites, recomenda-se documentar na política (em alto nível) e implementar na prática recursos como criptografia em trânsito, controle de acesso, monitoração de logs, backups, atualizações de segurança, testes de intrusão e políticas internas para equipe.[^5][^6]

## Governança interna e documentação complementar

Além dos documentos públicos exibidos no site, organizações precisam manter política interna de proteção de dados, regulamentos internos e registros de tratamento, demonstrando compromisso com a LGPD.[^14][^2]
Esses documentos internos complementam a política de privacidade pública e orientam colaboradores sobre procedimentos de coleta, armazenamento, compartilhamento e resposta a incidentes.[^14][^5]

## Adequação de sites de órgãos públicos

A LGPD se aplica expressamente a órgãos e entidades do setor público, impondo a necessidade de adequação de seus websites, portais de transparência e sistemas de atendimento.[^2][^3]
Isso inclui elaboração de políticas de privacidade específicas, indicação de encarregado, respeito a princípios de necessidade e finalidade, bem como atenção a normas setoriais adicionais.[^2][^5]

## Passos práticos para adequação de um website

Com base em boas práticas, a adequação à LGPD para sites pode seguir etapas como:

1. Mapeamento de dados pessoais coletados pelo site: identificar tipos de dados, pontos de coleta, finalidade e base legal.[^6][^5]
2. Revisão ou criação de política de privacidade aderente à LGPD, contemplando todos os elementos mínimos descritos.[^8][^5]
3. Implementação de aviso de privacidade em formulários e fluxos específicos (cadastros, newsletter, contato etc.).[^9]
4. Elaboração de política de cookies e configuração de banner/mecanismo de consentimento com opt-in, registro e possibilidade de alteração.[^10][^11][^13]
5. Revisão de termos de uso à luz do Marco Civil da Internet, alinhando responsabilidade por conteúdos de terceiros, guarda de registros e canais de atendimento.[^7][^1]
6. Definição e divulgação dos canais para exercício de direitos dos titulares (formulário, e-mail, painel do usuário).[^6][^3]
7. Fortalecimento de medidas de segurança da informação, com documentação básica na política e implementação técnica.[^3][^6]
8. Criação ou atualização de políticas internas e registros de tratamento, inclusive no setor público.[^14][^2]

## Conclusão

A adequação de websites à LGPD e demais marcos regulatórios brasileiros exige combinação de instrumentos jurídicos (políticas, avisos, termos) com práticas técnicas e organizacionais que concretizem princípios de transparência, segurança e responsabilização.[^5][^3]
Estruturar e manter atualizados documentos como política de privacidade, política de cookies, aviso de privacidade e termos de uso, além de mecanismos efetivos de consentimento, canais de atendimento e governança interna, é essencial para reduzir riscos regulatórios e fortalecer a confiança dos usuários.[^11][^5][^6]

---

## References

1. [o que diz o marco civil da internet? - Blog do Direito IDP -](https://blog.idp.edu.br/direito-digital/artigo-19-marco-civil-responsabilidade-provedores/) - O artigo 19 define um modelo de responsabilidade subsidiária para os provedores de aplicações. Segun...

2. [Proteção de dados no setor público: obrigação, riscos](https://www.migalhas.com.br/depeso/387848/protecao-de-dados-no-setor-publico-obrigacao-riscos) - A Lei Geral de Proteção de Dados, de maneira expressa, dispõe sobre a obrigatoriedade de sua observa...

3. [Lei Geral de Proteção de Dados Pessoais (LGPD)](https://www.gov.br/mds/pt-br/acesso-a-informacao/governanca/integridade/campanhas/lgpd) - A Lei versa sobre o tratamento de dados pessoais, dispostos em meio físico ou digital, feito por pes...

4. [Guia de Elaboração de Termo de Uso e Política de Privacidade](https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/ppsi/guia_termo_uso_politica_privacidade.pdf) - É importante que o Termo de Uso e a Política de Privacidade sejam disponibilizados em local de desta...

5. [Como elaborar uma política de privacidade aderente à ...](https://www.serpro.gov.br/lgpd/noticias/2019/elabora-politica-privacidade-aderente-lgpd-dados-pessoais) - A política de privacidade também deve orientar como são atendidos os direitos do titular de dados pe...

6. [LGPD para sites - Como garantir a conformidade com a Lei ...](https://uapps.com.br/blog/lgpd-para-sites-como-garantir-a-conformidade-com-a-lei-geral-de-protecao-de-dados-em-seu-website/) - Este artigo aborda medidas essenciais para garantir a conformidade com a LGPD em websites, como cons...

7. [Marco Civil da Internet](https://noticias.stf.jus.br/postsnoticias/stf-define-parametros-para-responsabilizacao-de-plataformas-por-conteudos-de-terceiros/) - O dispositivo exige o descumprimento de ordem judicial específica para que os provedores de aplicaçõ...

8. [LGPD: O que é e como devo adequar o meu site?](https://midiasim.com.br/lgpd-o-que-e-e-como-devo-adequar-o-meu-site/) - A adequação da LGPD trará mais segurança para os clientes e para a instituição, com o intuito de evi...

9. [LGPD: Diferenças entre Aviso e Política de Privacidade](https://www.machertecnologia.com.br/lgpd-aviso-privacidade-versus-politica-privacidade/) - A LGPD exige que esse aviso contenha informações básicas, como a finalidade da coleta, o tempo de ar...

10. [LGPD e Política de Cookies: Importância e como escrevê-la](https://www.machertecnologia.com.br/lgpd-politica-cookies-importancia/) - Entenda a importância da Política de Cookies na LGPD e como escrevê-la de forma efetiva. Entenda o p...

11. [Política de Cookies na LGPD: Como criar em 3 passos](https://legalcloud.com.br/politica-cookies-passo-passo/) - Confira o Passo a Passo Completo da para criar uma Política de Cookies conforme a LGPD e evitar risc...

12. [Coleta de dados pessoais pelos “cookies” só pode ser feita ...](https://jornal.usp.br/atualidades/coleta-de-dados-pessoais-pelos-cookies-so-pode-ser-feita-com-consentimento/) - A Lei Geral de Proteção de Dados não proíbe o uso dos cookies, mas exige o consentimento dos usuário...

13. [Cookie Consent LGPD](https://cookiefirst.com/pt/cookie-consent-lgpd/) - Sob a LGPD, portanto, o consentimento terá que ser dado explicitamente por meio de um ativo claro. I...

14. [ANPD publica a sua política interna de proteção de dados ...](https://somoscooperativismo.coop.br/noticias-lgpd/anpd-publica-a-sua-politica-interna-de-protecao-de-dados-pessoais-anpd-publica-a-sua-politica-interna-de-protecao-de-dados-pessoais-88) - Princípios e Objetivos: estabelece regras básicas para o tratamento de dados pessoais, os quais deve...

