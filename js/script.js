const { createApp } = Vue;
createApp({
  data() {
    return {
      tasks: [
        {
          text: "Wake up",
          done: true,
          id: 1,
        },
        {
          text: "Code",
          done: false,
          id: 2,
        },
        {
          text: "Eat",
          done: false,
          id: 3,
        },
        {
          text: "Sleep",
          done: false,
          id: 4,
        },
      ],
      nextId: 5,
      todoText: "",
    };
  },
  methods: {
    removeTask(id) {
      const index = this.tasks.findIndex((task) => task.id === id);
      this.tasks.splice(index, 1);
    },
    addTask() {
      this.tasks.push({
        text: this.todoText,
        done: false,
        id: this.nextId++,
      });
      this.todoText = "";
    },
    taskDone(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
  },
}).mount("#app");
