<!DOCTYPE html>
<html class="h-full">

<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >
  <meta
    http-equiv="X-UA-Compatible"
    content="ie=edge"
  >
  <meta
    name="theme-color"
    content="#ffffff"
  >
  <?php wp_head(); ?>
</head>

<body class="h-full w-full">
  <section class="flex h-full w-full bg-black/90">
    <div class="container flex flex-col items-center justify-center overflow-y-auto">
      <h1
        class="font-Montserrat mb-5 text-center text-2xl font-bold uppercase text-white md:text-4xl lg:text-5xl"
      >
        Сторінку не знайдено
      </h1>
      <span class="font-Montserrat mb-6 text-center text-base text-white/50 md:text-xl">
        Неправильно набрано адресу або такої сторінки не існує
      </span>
      <div class="flex w-full flex-col items-center justify-center gap-5">
        <a
          class="font-Montserrat flex w-full items-center justify-center border border-white px-5 py-4 text-center text-lg font-medium uppercase text-white transition-all duration-300 hover:bg-white hover:text-black md:max-w-[300px]"
          href="<? echo home_url(); ?>"
        >
          головна сторінка
        </a>
      </div>
    </div>
  </section>

  <?php wp_footer(); ?>
</body>
