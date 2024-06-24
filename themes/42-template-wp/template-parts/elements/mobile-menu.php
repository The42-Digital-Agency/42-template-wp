      <div
        x-cloak
        x-show="$store.mobileMenu.visible"
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="-translate-y-full md:translate-y-0 md:-translate-x-full"
        x-transition:enter-end="translate-y-0 md:translate-x-0"
        x-transition:leave="transition ease-in duration-300"
        x-transition:leave-start="translate-y-0 md:translate-x-0"
        x-transition:leave-end="-translate-y-full md:translate-y-0 md:-translate-x-full"
        id="mobile_menu"
        class="!z-90 fixed inset-0 h-full w-full bg-neutral-600 text-black"
      >
        <div class="container flex h-full flex-col justify-between gap-6 pb-4 md:pb-10">
          <div class="flex items-center justify-between py-4">
            <div>Logo</div>
            <button @click="$store.mobileMenu.hide()">
              <svg
                width="45"
                height="45"
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                class="text-white hover:text-zinc-500"
              >
                <path
                  d="M7.50081 8.00801L5.10347 10.3654C4.77475 10.6822 5.30724 11.2192 5.63648 10.903L7.99964 8.58495L10.3636 10.9037C10.6928 11.2199 11.2253 10.6829 10.8966 10.3662L8.49922 8.00874L10.8966 5.6351C11.2258 5.31889 10.6928 4.78072 10.3636 5.09692L8.00039 7.42819L5.63645 5.09619C5.30723 4.77998 4.77423 5.31816 5.10347 5.63437L7.50081 8.00801Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <nav class="overflow-y-auto">
            <?php my_nav_menu(['theme_location' => 'header_menu', 'container_id' => 'mob_navigation']); ?>
          </nav>

          <a
            href="#"
            target="_blank"
            class="mx-auto"
          >
            <span class="min-w-max">Button</span>
          </a>
        </div>
      </div>
