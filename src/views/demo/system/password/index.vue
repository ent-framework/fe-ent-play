<template>
  <ent-page-wrapper title="修改当前用户密码" content="修改成功后会自动退出当前登录！">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <ent-form @register="register" />
      <div class="flex justify-center">
        <ent-button @click="resetFields"> 重置 </ent-button>
        <ent-button class="!ml-4" type="primary" @click="handleSubmit"> 确认 </ent-button>
      </div>
    </div>
  </ent-page-wrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useForm } from 'fe-ent-core/es/components/form';

  import { formSchema } from './pwd-data';
  export default defineComponent({
    name: 'ChangePassword',
    setup() {
      const [register, { validate, resetFields }] = useForm({
        size: 'large',
        labelWidth: 100,
        showActionButtonGroup: false,
        schemas: formSchema,
      });

      async function handleSubmit() {
        try {
          const values = await validate();
          const { passwordOld, passwordNew } = values;

          // TODO custom api
          console.log(passwordOld, passwordNew);
          // const { router } = useRouter();
          // router.push(pageEnum.BASE_LOGIN);
        } catch {}
      }

      return { register, resetFields, handleSubmit };
    },
  });
</script>
