<template>
  <div class="profile">
    <div class="flex items-center space-x-4 p-4 bg-white">
      <div class="w-12 h-12 rounded-full overflow-hidden">
        <img :src="profileImageUrl" alt="User Profile" class="w-full h-full object-cover" />
      </div>
      <div>
        <p class="text-lg">{{ formattedName(user?.userName) }}</p>
        <span>Admin</span>
        <p class="text-sm text-gray-500">Logout</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formattedName } from '~/utils/utils';

const { user } = useOidcAuth()
const profileImageUrl = ref('/images/avatar.png');


const fetchProfileImage = async (accessToken: any) => {
  const response = await fetch('https://graph.microsoft.com/v1.0/me/photo/$value', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.value?.accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch profile image');
  }

  // Convert the image blob to a data URL
  const blob = await response.blob();
  profileImageUrl.value = URL.createObjectURL(blob);
}

onMounted(fetchProfileImage);


</script>

<style scoped>
.profile {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem 1rem;
  width: 100%;
  border-top: 1px solid #DFE4EA
}
</style>