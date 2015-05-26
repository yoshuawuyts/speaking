> - How can we unbundle client-side elements to stop repeating ourselves.

# main point
- Framework specific components create a lot of duplication and unnecessarily
  add a learning curve to components.
- Standards aim to solve this (e.g. webcomponents) but they don't tackle the
  deeper problems of reusability.
- Also: standards don't solve all problems yet (scene graph api, anyone?)
- The solution is to decouple implemntation from framework.

# describe problem
- there is a lot of repetition in inventions
- framework-specific elements are created time after time
- interface is confounded with core functionality
- which leads to repetition (everyone maintains their own core)
- and framework lock-in

---
# describe current (broken) solutions

---
# describe how decoupling elements are the solution to this

> So now then, how do we decouple our elements? / which elements do we decouple?

- decoupled router vs framework-specific routers (backbone, react-router)
- decoupled data vs integrated data
- decoupled elements vs integrated elements (base-element is the future)
