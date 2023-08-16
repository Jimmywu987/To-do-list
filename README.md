# to-do-list

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Demo

This To-do list project is built with Nuxtjs 2, tailwindcss and it is responsive to the width of the screen.

<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 14 58 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/23fa99c1-3376-45ee-add1-569b6fdb6fc3">

<img width="300" alt="Bildschirmfoto 2023-08-16 um 4 17 05 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/7ee2e766-655a-4dcf-ad93-92bb80f6f6d6">


---



### Functionalities:



---

1. Dark mode support

on the upper right corner, user can enable dark mode:

<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 15 53 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/822fede5-21a4-4af5-b2db-877c6401822c">

<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 18 35 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/cfa74e27-0773-4ec1-8499-2f5ee11cdb96">


---

2. Set the deadline for the task

User can easily add an hour or 3 hours or 4 weeks to the date and time.

<img width="1118" alt="Bildschirmfoto 2023-08-16 um 4 20 20 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/a0c6a016-f2b3-4c4e-a9ba-54f8baa3590a">


or directly add a specific date and time as the deadline for the task

  
<img width="555" alt="Bildschirmfoto 2023-08-16 um 4 22 02 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/7e74bbad-effc-46d0-a823-3d68280e3889">


Please be aware that as the default deadline is current time, without setting the deadline means the task will be marked as unfinished immediately.

And the reason why the deadline is set as current time is because, it is easier for user to add time base on the current time.

---

3. Set Task name

Input the task name on the input slot and press enter or the green add button, then the task will appear below.

<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 26 44 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/ce179aad-b408-470e-b78d-d896786993e7">



&#8595;

<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 27 16 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/fca10608-4874-40cc-91f9-ff7351167986">



When the input slot is empty, task won't be added to the list and error message will appear.

<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 30 22 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/da9b10b9-5be9-4c88-bc37-ec0d97e9cc20">


---

4. Different statuses of the task

  #### Red
   When the label of the task is red, it means the deadline for the task is passed the current time. Then the task won't be able to edit or mark as completed and the task is only able to be deleted

   <img width="500" alt="Bildschirmfoto 2023-08-16 um 4 33 24 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/84a2bfcf-c0e0-44b2-9134-c485d438e315">


#### Gray
   When the label of the task is gray, it means the deadline for the task is not yet passed the current time. The task is able to be edited or marked as completed or deleted.

<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 33 29 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/88ee1742-12e3-4094-b6f8-bc30bc1e6618">


#### Green
   When the label of the task is green, it means the task is completed. The task is able to be marked as uncompletec or deleted.


<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 33 34 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/b9c44797-8e7e-4d8c-a181-93d194acb945">

  ---

5. The tasks will be rendered order by deadline ascendingly

<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 40 36 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/907c20af-484d-410b-b2e3-fe71089160e2">

  ---

6. Comfirm modal pops up before task deletion

When click on the trash icon, a confirm modal will be pop up

   <img width="500" alt="Bildschirmfoto 2023-08-16 um 4 42 04 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/83769201-8027-4ed0-a237-da49976e64f4">


&#8595;

<img width="400" alt="Bildschirmfoto 2023-08-16 um 4 43 08 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/7c7cca42-4557-4f42-a008-ac1a37453f68">



  ---

7. Task editing

   When click on the edit icon, user can update the task name as well as the deadline
   
<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 48 29 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/649f0626-a2e1-4aa0-84f9-531061f1a472">

&#8595;

<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 48 22 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/15798a05-9611-4b8b-9fc1-79fcf4936141">


  ---

8. Copy task

   When copy icon is clicked, an copy will be added to the list
   
<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 50 22 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/a2099ddc-3be6-429e-9ccf-964396dd3ac0">

&#8595;

<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 50 27 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/e41e7c58-72c0-471f-bd28-2c0263b3e7ab">

---

9. Task status filter

#### All

  All renders all tasks regardless to each status.

<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 52 26 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/bc5264d2-c99e-484e-b7a2-85bdc11b2ca4">

#### Pending

 Pending renders all pending tasks that the deadlines are not yet passed the current time and not yet marked as completed.

<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 53 08 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/d9cb8f3b-aba1-4b7a-a27b-b698ba20b83f">

#### Unfinished

 Unfinished renders all unfinished tasks that the deadlines are already passed the current time and not yet marked as completed.


<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 53 14 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/d8227b67-fbc7-412c-887e-d010dd3a63e7">



#### Completed

 Completed renders all completed tasks that the tasks are marked as completed.

<img width="500" alt="Bildschirmfoto 2023-08-16 um 4 53 18 PM" src="https://github.com/Jimmywu987/To-do-list/assets/65562227/ae677cad-5151-4132-b05c-81b52e018201">





   
