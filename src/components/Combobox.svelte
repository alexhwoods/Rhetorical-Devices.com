<script lang="ts">
  import { Combobox } from "bits-ui";
  import { flyAndScale } from "./transitions";

  const fruits = [
    { value: "mango", label: "Mango" },
    { value: "watermelon", label: "Watermelon" },
    { value: "apple", label: "Apple" },
    { value: "pineapple", label: "Pineapple" },
    { value: "orange", label: "Orange" },
  ];

  let inputValue = "";
  let touchedInput = false;

  $: filteredFruits =
    inputValue && touchedInput
      ? fruits.filter((fruit) => fruit.value.includes(inputValue.toLowerCase()))
      : fruits;
</script>

<Combobox.Root items={filteredFruits} bind:inputValue bind:touchedInput>
  <div class="relative">
    <svg
      class="absolute start-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
      id="Capa_1"
      enable-background="new 0 0 461.516 461.516"
      height="512"
      viewBox="0 0 461.516 461.516"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      ><g
        ><path
          d="m185.746 371.332c41.251.001 81.322-13.762 113.866-39.11l122.778 122.778c9.172 8.858 23.787 8.604 32.645-.568 8.641-8.947 8.641-23.131 0-32.077l-122.778-122.778c62.899-80.968 48.252-197.595-32.716-260.494s-197.594-48.252-260.493 32.716-48.252 197.595 32.716 260.494c32.597 25.323 72.704 39.06 113.982 39.039zm-98.651-284.273c54.484-54.485 142.82-54.486 197.305-.002s54.486 142.82.002 197.305-142.82 54.486-197.305.002c-.001-.001-.001-.001-.002-.002-54.484-54.087-54.805-142.101-.718-196.585.239-.24.478-.479.718-.718z"
        /></g
      ></svg
    >
    <Combobox.Input
      class="inline-flex h-input w-[504px] truncate rounded-t-3xl rounded-b-3xl focus:rounded-b-none bg-gray-100 px-10 text-lg transition-colors placeholder:text-gray-800/50 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background font-serif"
      placeholder="Alliteration"
      aria-label="Choose a rhetorical device"
    />
  </div>

  <Combobox.Content
    class="w-full rounded-b-3xl bg-gray-100 px-1 py-3 outline-none"
    transition={flyAndScale}
    sideOffset={0}
  >
    {#each filteredFruits as fruit (fruit.value)}
      <Combobox.Item
        class="flex h-10 w-full select-none items-center py-3 pl-9 pr-1.5 text-lg capitalize outline-none transition-all duration-75 data-[highlighted]:bg-muted font-serif"
        value={fruit.value}
        label={fruit.label}
      >
        {fruit.label}
        <Combobox.ItemIndicator class="ml-auto" asChild={false}>
          <!-- <Check /> -->
        </Combobox.ItemIndicator>
      </Combobox.Item>
    {:else}
      <span class="block px-5 py-2 text-lg text-muted-foreground">
        No results found
      </span>
    {/each}
  </Combobox.Content>
  <Combobox.HiddenInput name="favoriteFruit" />
</Combobox.Root>
