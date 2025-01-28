<script setup lang="ts">
import { formattedName } from "~/utils/utils";
const open = ref(false);

const profileImageUrl = ref("/images/avatar.png");

const navLinkItems = ref([
    { text: "Home", href: "/" },
    { text: "My Investment", href: "/investment" },
    { text: "All Investment", href: "/" },
]);
const { user } = useOidcAuth();
</script>

<template>
    <header class="flex  items-center bg-white dark:bg-dark">
        <div class="container ">
            <div class="relative -mx-4 flex items-center justify-between">
                <div class="ml-5 w-60 max-w-full px-4">
                    <a href="/#" class="block w-full py-5">
                        <img src="/images/CW-Logo.png" alt="logo" class="dark:hidden" />
                    </a>
                </div>
                <div class="flex w-full items-center justify-between px-4">
                    <div>
                        <nav :class="{ hidden: !open }" id="navbarCollapse"
                            class="absolute right-3 top-full w-full max-w-[250px] rounded-lg bg-white px-5 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent">
                            <ul class="block lg:flex">
                                <template v-for="(item, index) in navLinkItems" :key="index">
                                    <li>
                                        <a v-if="item.href" :href="item.href"
                                            class="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex">
                                            {{ item.text }}
                                        </a>
                                    </li>
                                </template>
                            </ul>
                        </nav>
                    </div>
                    <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
                        <div class="mt-5 w-12 h-12 rounded-full overflow-hidden">
                            <img :src="profileImageUrl" alt="User Profile" class="w-full h-full object-cover" />
                        </div>
                        <div class="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white">
                            <p class="text-lg">{{ formattedName(user?.userName) }}</p>
                            <span>Admin</span>
                            <p class="text-sm text-gray-500">Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>