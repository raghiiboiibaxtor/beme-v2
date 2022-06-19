<script>
    export let _skill;
</script>

<div class="skill-container">
    <div class="skill-bubble">
<h1 class="skill-text">{_skill}</h1>
</div>
</div>

<style>
    .skill-container{
        margin-top: 0.88rem;
    }
    .skill-bubble{
        max-width: auto;
       margin: auto;
        padding: 0.23rem 0.88rem;
        border: 1.23px solid rgba(112, 156, 212, 0.0);
        background: 
            linear-gradient(var(--light), var(--light)) padding-box,
            linear-gradient(90deg, #5271FF 0%, #38B6FF 100%) border-box;
            box-shadow: 1px 4px 4px rgba(82, 101, 165, 0.055);
            border-radius: 23px;
        width: auto;
    }

    .skill-text{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 119.7%;
        /* or 22px */

        display: flex;
        align-items: center;
        text-align: center;

        color: rgba(2, 81, 177, 0.77);

    }
</style>