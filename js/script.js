const { createApp } = Vue;
createApp({
  data() {
    return {
      tasks: [
        {
          text: "a",
          done: false,
          id: 1,
        },
        {
          text: "b",
          done: false,
          id: 2,
        },
        {
          text: "c",
          done: false,
          id: 3,
        },
      ],
      nextId: 4,
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
