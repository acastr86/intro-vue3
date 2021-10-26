const app = {
    data() {
        return {
            title: "Inventory Management",
            newItem: "",
            items: [
                {
                    id: 0,
                    name: "Ice Cream",
                    qty: 5,
                },
                {
                    id: 1,
                    name: "Cookie",
                    qty: 4,
                },
                {
                    id: 2,
                    name: "Chocolate",
                    qty: 9,
                }]
                
        };
    },
    computed: {
        total(){
            return this.items.reduce( (sum,{qty}) => sum + qty, 0);
        }

    },
    methods: {
        addItem() {
            if (this.newItem.length > 0) {
                this.items.push({
                    id: Math.floor(Math.random() * 100000).toString(),
                    name: this.newItem,
                    qty: 0,
                });
                this.newItem="";
            }
        }
    }
    
};

Vue.createApp(app).mount("#app");