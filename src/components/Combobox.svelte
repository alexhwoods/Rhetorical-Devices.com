<script lang="ts">
  // TODO:
  /**
   * 1. Weird break between contents and input on ipad
   */

  import { Combobox } from "bits-ui";

  const rhetoricalDevices = [
    { value: "alliteration", label: "Alliteration" },
    { value: "anaphora", label: "Anaphora" },
    { value: "analogy", label: "Analogy" },
    { value: "consonance", label: "Consonance" },
    { value: "antithesis", label: "Antithesis" },
    { value: "anadiplosis", label: "Anadiplosis" },
    { value: "epistrophe", label: "Epistrophe" },
    { value: "epizeuxis", label: "Epizeuxis" },
    { value: "euphemism", label: "Euphemism" },
    { value: "hyperbole", label: "Hyperbole" },
    { value: "irony", label: "Irony" },
    { value: "litotes", label: "Litotes" },
    { value: "metaphor", label: "Metaphor" },
    { value: "metonymy", label: "Metonymy" },
    { value: "onomatopoeia", label: "Onomatopoeia" },
    { value: "oxymoron", label: "Oxymoron" },
    { value: "paradox", label: "Paradox" },
    { value: "parallelism", label: "Parallelism" },
    { value: "personification", label: "Personification" },
    { value: "pun", label: "Pun" },
    { value: "repetition", label: "Repetition" },
    { value: "rhetorical-question", label: "Rhetorical Question" },
    { value: "simile", label: "Simile" },
    { value: "synecdoche", label: "Synecdoche" },
    { value: "tmesis", label: "Tmesis" },
    { value: "tricolon", label: "Tricolon" },
    { value: "zeugma", label: "Zeugma" },
  ];

  let inputValue = "";
  let touchedInput = false;
  let contentIsOpen = false;

  $: filteredRhetoricalDevices =
    inputValue && touchedInput
      ? rhetoricalDevices.filter((fruit) =>
          fruit.value.includes(inputValue.toLowerCase())
        )
      : rhetoricalDevices;

  function handleSelectedChange(selected: { value: string } | undefined) {
    if (selected) {
      window.location.href = `/${selected.value}`;
    }
  }

  function handleItemClick(rhetoricalDevice: { value: string }) {
    window.location.href = `/${rhetoricalDevice.value}`;
  }
</script>

<Combobox.Root
  items={filteredRhetoricalDevices}
  bind:inputValue
  bind:touchedInput
  onOpenChange={(isOpen) => {
    contentIsOpen = isOpen;
  }}
  onSelectedChange={handleSelectedChange}
>
  <div class="relative">
    <svg
      class="absolute left-4 top-1/2 w-4 h-4 -translate-y-1/2 text-muted-foreground"
      id="Capa_1"
      enable-background="new 0 0 461.516 461.516"
      height="512"
      viewBox="0 0 461.516 461.516"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="m185.746 371.332c41.251.001 81.322-13.762 113.866-39.11l122.778 122.778c9.172 8.858 23.787 8.604 32.645-.568 8.641-8.947 8.641-23.131 0-32.077l-122.778-122.778c62.899-80.968 48.252-197.595-32.716-260.494s-197.594-48.252-260.493 32.716-48.252 197.595 32.716 260.494c32.597 25.323 72.704 39.06 113.982 39.039zm-98.651-284.273c54.484-54.485 142.82-54.486 197.305-.002s54.486 142.82.002 197.305-142.82 54.486-197.305.002c-.001-.001-.001-.001-.002-.002-54.484-54.087-54.805-142.101-.718-196.585.239-.24.478-.479.718-.718z"
        />
      </g>
    </svg>
    <Combobox.Input
      class="inline-flex h-input w-full truncate rounded-t-3xl {contentIsOpen
        ? 'rounded-b-none'
        : 'rounded-b-3xl'} bg-gray-100 px-10 text-md lg:text-lg transition-colors placeholder:text-gray-800/50 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background font-serif"
      placeholder="Alliteration"
      aria-label="Choose a rhetorical device"
    />
  </div>

  <Combobox.Content
    class="w-full rounded-b-3xl bg-gray-100 outline-none overflow-hidden"
  >
    <div class="border-[1px] border-gray-400 mx-4"></div>
    <div class="pt-1 pb-2">
      {#each filteredRhetoricalDevices as rhetoricalDevice (rhetoricalDevice.value)}
        <Combobox.Item
          class="flex h-10 w-full select-none items-center py-3 pl-10 pr-1.5 text-md lg:text-lg capitalize outline-none font-serif rounded-4 data-[highlighted]:bg-[#7AA6C440] hover:bg-[#7AA6C440] focus:bg-[#7AA6C440]"
          value={rhetoricalDevice.value}
          label={rhetoricalDevice.label}
          on:click={() => handleItemClick(rhetoricalDevice)}
        >
          {rhetoricalDevice.label}
          <Combobox.ItemIndicator class="ml-auto bg-red-500" asChild={false} />
        </Combobox.Item>
      {:else}
        <span class="block px-5 py-2 text-lg font-serif text-muted-foreground">
          No results found
        </span>
      {/each}
    </div>
  </Combobox.Content>
  <Combobox.HiddenInput class="border-red-500 border-2" name="favoriteFruit" />
</Combobox.Root>
