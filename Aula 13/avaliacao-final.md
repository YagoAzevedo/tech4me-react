# Site para visualização de asteróides próximos da terra

Utilizando a biblioteca React, desenvolva um novo projeto frontend de um site que irá possuir três páginas.
Seu site deve possuir um menu que seja apresentado em todas as páginas. Esse menu deve possuir link para as páginas 1 (listagem de asteroides) e 3 (sobre mim).

## Página 1

Essa página deve ser acessada pelo endereço raiz do site (exemplo: http://localhost:51725/)
Nessa página deve ser possível visualizar uma lista de asteroides próximos da terra no dia atual (sempre data de hoje). Para isso faça uma requisição para o endpoint Asteroids - NeoWs da API da NASA.

https://api.nasa.gov/

Cada item da lista deve mostrar as seguintes informações recuperadas da API:
- Nome do objeto (name)
- É potencialmente perigoso? (is_potentially_hazardous_asteroid) - Esse campo deve ser mostrado como Sim ou Não ao invés de true ou false
- Diâmetro MÁXIMO estimado em quilômetros (estimated_diameter.kilometers.estimated_diameter_max)

Use sua criatividade para estilizar suas páginas, deixando a experiência agradável para o usuário.
Ao clicar em um dos itens da lista, o site deve redirecionar para outra rota `/asteroide/:id`, onde será possível visualizar mais detalhes desse objeto.

## Página 2

A segunda página deve ser acessada ao clicar em um dos itens da lista na página anterior.
Se trata de uma página de detalhes do item clicado na lista da página anterior.
Por isso a página deve ter o seguinte título: “Detalhes do asteroide”.
Nessa página deve ser possível visualizar as mesmas informações da página anterior (name, is_potentially_hazardous_asteroid, estimated_diameter), e também informações complementares sobre o asteroide clicado:
- Velocidade relativa do objeto por hora (close_approach_data.relative_velocity.kilometers_per_hour)
- Magnitude absoluta (absolute_magnitude_h)

## Página 3

Uma página sobre você. O título desta página deve possuir seu nome completo. 
Adicione uma foto sua (opcional) e um pequeno texto com sua trajetória e tecnologias aprendidas.

## Avaliação

A correção e avaliação será efetuada predominantemente pela funcionalidade. Se as páginas forem renderizadas corretamente, apresentando o conteúdo solicitado, nenhum ponto será descontado. Também serão concedidos pontos bônus por criatividade e organização de código.

## Entrega

Crie um novo repositório na sua conta do Github para publicar o código. Faça o upload ou push dos arquivos do seu projeto, lembrando de **NÃO** enviar a pasta node_modules.


