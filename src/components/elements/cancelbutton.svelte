<script>
    import Icon from '@iconify/svelte';
    </script>
    
    <div class="cancel-button-flex">
    <button>
        <Icon icon="ic:round-cancel" />
    </button>
    </div>
    
    <style>
    
        .cancel-button-flex{
            width: 2.3rem !important;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    
        button{
            z-index: 23;
            display: flex;
            justify-content: center;
            text-align: center;
            width: 2.3rem !important;
            height: 1.77rem !important;
            background-color:#ECF1FE;
            color: var(--main);
            box-shadow: 1px 4px 4px rgba(82, 101, 165, 0.23);
            border-radius: 1.23rem;
            opacity: 77%;
        }
    
        button:hover{
         opacity: 100%;
        }
    
    </style>