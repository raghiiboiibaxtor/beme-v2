<script>
    import Icon from '@iconify/svelte';
    </script>
    
    <div class="edit-button-flex">
    <button>
        <Icon icon="eva:edit-2-outline" />
    </button>
    </div>
    
    <style>
    
        .edit-button-flex{
            width: 2.3rem;
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
            width: 2.3rem;
            height: auto;
            background-color:#ECF1FE;
            color: var(--main);
            box-shadow: 1px 4px 4px rgba(82, 101, 165, 0.23);
            border-radius: 1.23rem;
            opacity: 88%;
        }
    
        button:hover{
         opacity: 123%;
        }
    
    
    </style>