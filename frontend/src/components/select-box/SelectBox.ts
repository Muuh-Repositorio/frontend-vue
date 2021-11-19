import { Options, Vue } from "vue-class-component";

@Options({
    name: "SelectBox",
    props: ['title', 'options', 'modelValue', 'id']
})
export default class SelectBox extends Vue {
    selectOption(id: any) {
        const selected: any = document.querySelector(`.selected#${id}`);
        const optionsContainer: any = document.querySelector(`.options-container#${id}`);
        const optionsList = document.querySelectorAll(`.option#${id}`);

        if (!optionsContainer?.classList.contains('active')) {
            optionsContainer?.classList.add('active')

            optionsList.forEach((option: any) => {
                option.addEventListener("click", () => {
                    selected.innerHTML = option.querySelector("label").innerHTML;
                    optionsContainer.classList.remove("active");
                    const value = option.querySelector("input").value
                    this.$emit('update:modelValue', value)
                });
            });
        } else {
            optionsContainer?.classList.remove('active')
        }       
    }
}