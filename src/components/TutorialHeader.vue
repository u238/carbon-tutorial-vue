<template>
  <cv-header aria-label="Carbon tutorial">
    <cv-skip-to-content href="#main-content"
      >Skip to content</cv-skip-to-content
    >

    <cv-header-name to="/" prefix="NetEye">
      Top Secret
    </cv-header-name>


    <cv-header-nav v-if="this.$store.state.isLoggedIn">
      <cv-header-menu-item to="/page1">1</cv-header-menu-item>
    </cv-header-nav>

    <template slot="header-global">
      <cv-header-global-action aria-label="Notifications">
        <notification-20 />
      </cv-header-global-action>
      <cv-header-global-action aria-label="User avatar">
        <user-avatar-20 />
      </cv-header-global-action>
    </template>
  </cv-header>
</template>

<script>
import { Notification20, UserAvatar20 } from '@carbon/icons-vue';
import store from '../store';

export default {
  name: 'TutorialHeader',
  components: { Notification20, UserAvatar20 }
};
</script>
