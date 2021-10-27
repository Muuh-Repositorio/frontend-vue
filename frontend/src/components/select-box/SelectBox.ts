import { Options, Vue } from "vue-class-component";

@Options({
    name: "SelectBox",
    props: ['title', 'options', 'modelValue']
})
export default class SelectBox extends Vue {

    selectOption(): void {
        const selected: any = document.querySelector(".selected");
        const optionsContainer: any = document.querySelector(".options-container");
        const optionsList = document.querySelectorAll(".option");

        selected.addEventListener("click", () => {
            optionsContainer.classList.toggle("active");
        });

        optionsList.forEach((option: any) => {
            option.addEventListener("click", () => {
                selected.innerHTML = option.querySelector("label").innerHTML;
                optionsContainer.classList.remove("active");
                this.$emit('update:modelValue', option.textContent)
            });
        });
    }

    mounted(): void {
        this.selectOption()
    }
}