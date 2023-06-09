<template>
  <ent-page-wrapper title="二维码组件使用示例">
    <div class="flex flex-wrap">
      <ent-collapse-container
        title="基础示例"
        :can-expan="true"
        class="text-center mb-6 qrcode-demo-item"
      >
        <QrCode :value="qrCodeUrl" />
      </ent-collapse-container>

      <ent-collapse-container title="渲染成img标签示例" class="text-center mb-6 qrcode-demo-item">
        <QrCode :value="qrCodeUrl" tag="img" />
      </ent-collapse-container>

      <ent-collapse-container title="配置样式示例" class="text-center mb-6 qrcode-demo-item">
        <QrCode
          :value="qrCodeUrl"
          :options="{
            color: { dark: '#55D187' },
          }"
        />
      </ent-collapse-container>

      <ent-collapse-container title="本地logo示例" class="text-center mb-6 qrcode-demo-item">
        <QrCode :value="qrCodeUrl" :logo="LogoImg" />
      </ent-collapse-container>

      <ent-collapse-container title="在线logo示例" class="text-center mb-6 qrcode-demo-item">
        <QrCode
          :value="qrCodeUrl"
          logo="https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png"
          :options="{
            color: { dark: '#55D187' },
          }"
        />
      </ent-collapse-container>

      <ent-collapse-container title="logo配置示例" class="text-center mb-6 qrcode-demo-item">
        <QrCode
          :value="qrCodeUrl"
          :logo="{
            src: 'https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png',
            logoSize: 0.2,
            borderSize: 0.05,
            borderRadius: 50,
            bgColor: 'blue',
          }"
        />
      </ent-collapse-container>

      <ent-collapse-container title="下载示例" class="text-center qrcode-demo-item">
        <QrCode ref="qrRef" :value="qrCodeUrl" :logo="LogoImg" />
        <ent-button class="mb-2" type="primary" @click="download"> 下载 </ent-button>
        <div class="msg">(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)</div>
      </ent-collapse-container>

      <ent-collapse-container title="配置大小示例" class="text-center qrcode-demo-item">
        <QrCode :value="qrCodeUrl" :width="300" />
      </ent-collapse-container>

      <ent-collapse-container title="扩展绘制示例" class="text-center qrcode-demo-item">
        <QrCode
          ref="qrDiyRef"
          :value="qrCodeUrl"
          :width="200"
          :options="{ margin: 5 }"
          :logo="LogoImg"
          @done="onQrcodeDone"
        />
        <ent-button class="mb-2" type="primary" @click="downloadDiy"> 下载 </ent-button>
        <div class="msg">要进行扩展绘制则不能将tag设为img</div>
      </ent-collapse-container>
    </div>
  </ent-page-wrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { QrCode } from 'fe-ent-qrcode';
  import LogoImg from '/@/assets/images/logo.png';
  import type { QrCodeActionType } from 'fe-ent-qrcode';
  import type { Nullable } from 'fe-ent-core/es/types';

  const qrCodeUrl = 'https://www.vvbin.cn';
  export default defineComponent({
    components: { QrCode },
    setup() {
      const qrRef = ref<Nullable<QrCodeActionType>>(null);
      const qrDiyRef = ref<Nullable<QrCodeActionType>>(null);
      function download() {
        const qrEl = unref(qrRef);
        if (!qrEl) return;
        qrEl.download('文件名');
      }
      function downloadDiy() {
        const qrEl = unref(qrDiyRef);
        if (!qrEl) return;
        qrEl.download('Qrcode');
      }

      function onQrcodeDone({ ctx }: any) {
        if (ctx instanceof CanvasRenderingContext2D) {
          // 额外绘制
          ctx.fillStyle = 'black';
          ctx.font = '16px "微软雅黑"';
          ctx.textBaseline = 'bottom';
          ctx.textAlign = 'center';
          ctx.fillText('你帅你先扫', 100, 195, 200);
        }
      }
      return {
        onQrcodeDone,
        qrCodeUrl,
        LogoImg,
        download,
        downloadDiy,
        qrRef,
        qrDiyRef,
      };
    },
  });
</script>
<style scoped>
  .qrcode-demo-item {
    width: 30%;
    margin-right: 1%;
  }
</style>
