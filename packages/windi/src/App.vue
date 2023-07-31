<script setup lang='ts'>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <!-- <WCheckbox v-model="value" name="notifications" label="Notifications" required help="Please check this box" /> -->
    <!-- <div class="w-96">
      <WAlert
        :is-visible="true" :variant="['warning-light']" transition="fade" title="Alert" closable
      >
        <template #leading>
          <WIcon name="ph:sun" size="2xl" />
        </template>
        <WAlertDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, sint!
        </WAlertDescription>
      </WAlert>
    </div> -->
    <!-- <WButton link @click="handle()">
      <WIcon name="ph:x" />
    </WButton> -->
    <!-- <div class="w-96">
      <WInput
        v-model="value" label="Email" type="email" help="You have to enter your email to proceed" placeholder="Search" size="xl" :variant="['my-variant']"
      />
    </div> -->
    <!-- <button @click="handle()">
      Button
    </button> -->
    <!-- <WKbd>M</WKbd>
    <WKbd>M</WKbd> -->
    <!-- <WBadge position="top-right" value="100" :max-value="99" color="lime">
      <WIcon name="ph:bell" size="3xl" />
    </WBadge> -->
    <div class="max-w-md">
      <WAccordion class="grid gap-3">
        <WAccordionItem rounded title="1. How do I host Supabase?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad error distinctio beatae odio natus unde ratione,
          veniam assumenda dolor inventore cum architecto velit, ducimus ab debitis aut. Deserunt, atque enim vel
          consectetur tenetur qui illo.
        </WAccordionItem>
        <WAccordionItem rounded title="2. Do you support only PostgreSQL?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad error distinctio beatae odio natus unde ratione,
          veniam assumenda dolor inventore cum architecto velit, ducimus ab debitis aut. Deserunt, atque enim vel
          consectetur tenetur qui illo.
        </WAccordionItem>
        <WAccordionItem rounded title="3. Do you have a library for JavaScript and Flutter?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad error distinctio beatae odio natus unde ratione,
          veniam assumenda dolor inventore cum architecto velit, ducimus ab debitis aut. Deserunt, atque enim vel
          consectetur tenetur qui illo.
        </WAccordionItem>
      </WAccordion>
    </div>
    <!-- <div class="w-96">
      <WAlert :is-visible="show" variant="warning-light" transition="fade" title="Alert" closable @close="handleClose">
        <template #leading>
          <WIcon name="ph:sun" size="2xl"/>
        </template>
        <WAlertDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, sint!
        </WAlertDescription>
      </WAlert>
    </div> -->
    <!-- <WButton icon="ph:reddit-logo" :trailing="false" label="Reddit" :loading="loading" :variant="[loading ? 'default-disabled' : 'default']" size="2xl" /> -->
    <!-- <WAvatar src="https://github.cm/selemondev.png" name="Selemon" size="xl" chip-color="orange" chip-position="bottom-left" initials="SB" />
    <WBadge position="top-right" value="100" :max-value="99" variant="primary">
      <WIcon name="ph:bell" size="3xl" />
    </WBadge> -->
    <!-- <WAlert :is-visible="show" icon="ph:sun" :trailing="false" variant="primary" transition="slideLeft" title="Alert" closable @close="handleClose">
      <WAlertDescription>
        Hello from alert
      </WAlertDescription>
    </WAlert> -->
    <!-- <WButton icon="ph:sun" variant="warning-light" size="xl" type="button" />
    <WButtonGroup>
      <WButton icon="ph:sun" variant="primary" size="xl" type="button" />
      <WButton icon="ph:sun" variant="primary" size="xl" type="button" />
      <WButton icon="ph:sun" variant="primary" size="xl" type="button" />
    </WButtonGroup> -->
  </div>
  <!-- <div class="grid place-items-center">
    <WAvatarGroup :max="2" size="md">
      <WAvatar src="https://github.com/selemondev.png" name="Selemon" initials="SB" />
      <WAvatar src="https://github.com/selemondev.png" name="Selemon" initials="SB" />
      <WAvatar src="https://github.cm/selemondev.png" name="Selemon" initials="SB" />
    </WAvatarGroup>
  </div> -->
  <!-- <div class="mt-48 p-4 space-y-2">
    <WAlert variant="primary" transition="fade" title="Alert" closable>
      <WAlertDescription>
        Hello from alert
      </WAlertDescription>
    </WAlert>

    <WAlert variant="primary-dashed" transition="slideLeft" title="Alert" closable>
      <WAlertDescription>
        Hello from alert
      </WAlertDescription>
    </WAlert>
  </div> -->
</template>
