import { getParentLayout } from 'fe-ent-core/es/router';
import { RoleEnum } from 'fe-ent-core/es/logics/enums';
import { t } from 'fe-ent-core/es/hooks';
import type { AppRouteRecordRaw } from 'fe-ent-core/es/router';

const permission: AppRouteRecordRaw = {
  path: '/permission',
  name: 'Permission',
  component: 'LAYOUT',
  redirect: '/permission/front/page',
  meta: {
    orderNo: 15,
    icon: 'ion:key-outline',
    title: t('routes.demo.permission.permission'),
  },

  children: [
    {
      path: 'front',
      name: 'PermissionFrontDemo',
      component: getParentLayout('PermissionFrontDemo'),
      meta: {
        title: t('routes.demo.permission.front'),
      },
      children: [
        {
          path: 'page',
          name: 'FrontPageAuth',
          component: () => import('/@/views/demo/permission/front/index.vue'),
          meta: {
            title: t('routes.demo.permission.frontPage'),
          },
        },
        {
          path: 'btn',
          name: 'FrontBtnAuth',
          component: () => import('/@/views/demo/permission/front/btn.vue'),
          meta: {
            title: t('routes.demo.permission.frontBtn'),
          },
        },
        {
          path: 'auth-pageA',
          name: 'FrontAuthPageA',
          component: () => import('/@/views/demo/permission/front/auth-page-a.vue'),
          meta: {
            title: t('routes.demo.permission.frontTestA'),
            roles: [RoleEnum.SUPER],
          },
        },
        {
          path: 'auth-pageB',
          name: 'FrontAuthPageB',
          component: () => import('/@/views/demo/permission/front/auth-page-b.vue'),
          meta: {
            title: t('routes.demo.permission.frontTestB'),
            roles: [RoleEnum.TEST],
          },
        },
      ],
    },
    {
      path: 'back',
      name: 'PermissionBackDemo',
      component: getParentLayout('PermissionBackDemo'),
      meta: {
        title: t('routes.demo.permission.back'),
      },
      children: [
        {
          path: 'page',
          name: 'BackAuthPage',
          component: () => import('/@/views/demo/permission/back/index.vue'),
          meta: {
            title: t('routes.demo.permission.backPage'),
          },
        },
        {
          path: 'btn',
          name: 'BackAuthBtn',
          component: () => import('/@/views/demo/permission/back/btn.vue'),
          meta: {
            title: t('routes.demo.permission.backBtn'),
          },
        },
      ],
    },
  ],
};

export default permission;
