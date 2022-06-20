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
        margin-top: 0.55rem;
    }
    .skill-bubble{
        display: flex;
        height: 1.77rem;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: 1.23px solid rgba(112, 156, 212, 0.0);
        background-color: rgba(189, 209, 249, 0.23);
        border-radius: 23px;
    }

    .skill-text{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 119.7%;
        /* or 22px */
        display: flex;
        align-items: center;
        text-align: center;
        color: rgba(2, 81, 177, 0.55);
    }

</style>