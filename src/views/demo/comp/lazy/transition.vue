<template>
  <ent-page-wrapper title="懒加载自定义动画示例" content="懒加载组件显示动画">
    <div class="lazy-base-demo-wrap">
      <h1>向下滚动</h1>

      <div class="lazy-base-demo-box">
        <ent-lazy-container transition-name="custom">
          <TargetContent />
        </ent-lazy-container>
      </div>
    </div>
  </ent-page-wrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import TargetContent from './target-content.vue';

  export default defineComponent({
    components: { TargetContent },
  });
</script>
<style lang="less">
  .lazy-base-demo {
    &-wrap {
      display: flex;
      width: 50%;
      height: 2000px;
      margin: 20px auto;
      text-align: center;
      background-color: @component-background;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    &-box {
      width: 300px;
      height: 300px;
    }

    h1 {
      height: 1300px;
      margin: 20px 0;
    }
  }

  .custom-enter {
    opacity: 0%;
    transform: scale(0.4) translate(100%);
  }

  .custom-enter-to {
    opacity: 100%;
  }

  .custom-enter-active {
    position: absolute;
    top: 0;
    width: 100%;
    transition: all 0.5s;
  }

  .custom-leave {
    opacity: 100%;
  }

  .custom-leave-to {
    opacity: 0%;
    transform: scale(0.4) translate(-100%);
  }

  .custom-leave-active {
    transition: all 0.5s;
  }
</style>
