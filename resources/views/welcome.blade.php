<!doctype html>
<html lang="pt-BR" data-theme="dark">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Osvaldo Sérgio | Desenvolvedor Web Full-Stack</title>
    <meta
      name="description"
      content="Portfólio de Osvaldo Sérgio, Desenvolvedor Web Full-Stack."
    />
    <script>
      (() => {
        const storageKey = 'os-theme-preference';
        let savedTheme = null;
        try {
          savedTheme = localStorage.getItem(storageKey);
        } catch {}
        const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        document.documentElement.dataset.theme = savedTheme || systemTheme;
        document.documentElement.style.colorScheme = document.documentElement.dataset.theme;
      })();
    </script>
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="{{ url('/') }}" />

    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="Portfólio Osvaldo Sérgio" />
    <meta property="og:title" content="Osvaldo Sérgio | Desenvolvedor Web Full-Stack" />
    <meta
      property="og:description"
      content="Conheça projetos, habilidades e serviços de desenvolvimento web com foco em experiência e performance."
    />
    <meta property="og:url" content="{{ url('/') }}" />
    <meta property="og:image" content="{{ url('/portfolio-assets/assets/video-reference-thumbnail.png') }}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Osvaldo Sérgio | Desenvolvedor Web Full-Stack" />
    <meta
      name="twitter:description"
      content="Portfólio profissional com projetos reais, habilidades técnicas e contato direto."
    />
    <meta name="twitter:image" content="{{ url('/portfolio-assets/assets/video-reference-thumbnail.png') }}" />
    <meta name="theme-color" content="#020605" />
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}" />

    @vite(['resources/css/app.css', 'resources/js/app.js'])
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
