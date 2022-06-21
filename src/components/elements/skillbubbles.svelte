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
        width: 100% !important;
        margin-top: 0.44rem;
    }
    .skill-bubble{
        width: auto !important;
        display: flex !important;
        height: 1.77rem;
        border: 1.23px solid rgba(112, 156, 212, 0.0);
        background-color: rgba(189, 209, 249, 0.23);
        border-radius: 23px;
    }

    .skill-text{
        margin-left: 1.23rem;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 119.7%;
        /* or 22px */
        display: flex !important;
        align-items: center !important;
        text-align: center !important;
        color: rgba(2, 81, 177, 0.55);
    }

</style>