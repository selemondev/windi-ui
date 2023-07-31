<script setup lang='ts'>
function handle() {
  // eslint-disable-next-line no-console
  return console.log('Hello there')
}
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
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
    <WButton
      :variants="{
        'my-variant': {
          root: 'bg-black hover:bg-gray-800 disabled:hover:bg-black',
          buttonLoading: '!bg-red-500',
        },
      }" :variant="['danger-ghost']" @click="handle()"
    >
      Button
    </WButton>

    <!-- <button @click="handle()">
      Button
    </button> -->
    <!-- <WKbd>M</WKbd>
    <WKbd>M</WKbd> -->
    <!-- <WBadge position="top-right" value="100" :max-value="99" color="lime">
      <WIcon name="ph:bell" size="3xl" />
    </WBadge> -->
    <!-- <div class="w-96">
      <WAccordion>
        <WAccordionItem title="Title 1">
          Reacting against a rich and affluent Britain of the 1960s, it tried to
          re-radicalise a design industry which the signatories felt had become
          lazy and uncritical. Drawing on ideas shared by critical theory, the
          Frankfurt School, and the counter-culture of the time, it explicitly
          reaffirmed the belief that design is not a neutral, value-free
          process.
        </WAccordionItem>
        <WAccordionItem title="Title 2">
          Reacting against a rich and affluent Britain of the 1960s, it tried to
          re-radicalise a design industry which the signatories felt had become
          lazy and uncritical. Drawing on ideas shared by critical theory, the
          Frankfurt School, and the counter-culture of the time, it explicitly
          reaffirmed the belief that design is not a neutral, value-free
          process.
        </WAccordionItem>
        <WAccordionItem title="Title 3">
          Reacting against a rich and affluent Britain of the 1960s, it tried to
          re-radicalise a design industry which the signatories felt had become
          lazy and uncritical. Drawing on ideas shared by critical theory, the
          Frankfurt School, and the counter-culture of the time, it explicitly
          reaffirmed the belief that design is not a neutral, value-free
          process.
        </WAccordionItem>
      </WAccordion>
    </div> -->
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
