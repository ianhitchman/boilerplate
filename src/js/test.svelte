<script>
  let name = "Barry";
  const toggleName = () => {
    name = name === "Barry" ? "Paul" : "Barry";
  }
</script>

<h1>Hi there {name}!</h1>
<button on:click={toggleName}>Change name</button>