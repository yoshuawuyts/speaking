# main

> How can we unbundle client-side elements to stop repeating ourselves.

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
- frameworks encourage this behavior
- by bundling standard components in (routers, viewcomponents)
- not splitting up their elements for reusability (virtual-dom)
- not using the ecosystem of elements (assert)
- or providing abstractions that require buy-in (jsx)

- webcomponents solve all problems right?
- webcomponents solve shit, they're just a different framework
- but at least a framework we can agree on
- up until then we need to solve it differently
- standards are missing; common ground between components (scene graph) is
  lacking

---

# describe how decoupling elements are the solution to this

> So now then, how do we decouple our elements? / which elements do we decouple?

- decoupled router vs framework-specific routers (backbone, react-router)
- decoupled data vs integrated data
- decoupled elements vs integrated elements (base-element is the future)

# sections
- unix philosophy
- custom elements (next big thing)
- virtual-dom (neato)
- base-element
- css-modules
