# Contribute with Docs

All efforts to contribute to the [Docs](https://strapi.io/documentation/3.0.0-beta.x/) are highly appreciated, we recommend [these guidelines](/3.0.0-beta.x/community/contribute-with-docs.html#the-workflow). We accept all kinds of Pull Requests, including bug fixes, documentation, and tutorials.

**NOTE:** We encourage you to discuss your proposed Pull Request with maintainers or core team members before submitting new features. In this way, you may get tips and other useful information (e.g., upcoming breaking changes) and you ensure your pull request aligns with the project roadmap.

You are welcome to create tutorials, articles, and videos for your blog or channels without speaking to a maintainer.

## General Guidelines

Please review the following guidelines and recommendations regarding contributing to Docs.

Broadly speaking, if you want to contribute documentation, you will either:

1. Create **new** documentation for a topic not documented, or
2. Improve existing documentation with additional examples, adding more context, fixing grammar and typos, or doing [translations](/3.0.0-beta.x/community/contribute-with-docs.html#translations).

Each of the two ways above have specific [workflows](/3.0.0-beta.x/community/contribute-with-docs.html#the-workflow) which should be followed to ensure maximum efficiency in your contributions to the documentation.

## Categories of Documentation

There are four different **types of content** existing in the documentation:

a. **Tutorials**

b. **How-tos**

c. **Reference Topics**

d. **Explanations**

Below are explanations for each category of content. The keys are to **know your audience** and **write for them**, both of which are in this contributing guide.

### Tutorials

A **Tutorial** is a complete set of instructions that take the reader through to the completion of a specific end, such as a project or complete working application. The purpose of tutorials is to **teach** general concepts and show how to accomplish specific actions using Strapi.

This _audience member_ can be a developer who is generally speaking is new to JavaScript programming or a developer who is new to programming with Strapi. **Tutorials** are for the newer programmer. More experienced developers, who are new to Strapi, find the **How-tos** better suited to their experience, but they can also follow tutorials.

Examples include the [Building a Static Blog using Gatsby and Strapi](https://blog.strapi.io/building-a-static-website-using-gatsby-and-strapi/) tutorial and the [Cooking a Deliveroo Clone](https://blog.strapi.io/strapi-next-setup/) tutorial.

### How-to's

A **How-to** is a **step-by-step guide showing how** to solve a specific problem or accomplish a specific task. These guides provide concise action steps and assume a general understanding of the context by the audience.

This _audience member_ is a developer who is newer to programming with Strapi. General knowledge of the technology covered is assumed. Here the **How-tos** are meant to show how to do things with Strapi, without necessarily explaining the theory.

Examples include the [Digital Ocean Deployment Guide](/3.0.0-beta.x/guides/deployment.html#digital-ocean) and [How to install MongoDB Locally](/3.0.0-beta.x/guides/databases.html#install-mongodb-locally).

### Reference topics

**Reference topics** are subjects that **are resources** to bookmark and used as a reference. Developers can be expected to refer to Reference topics regularly throughout the development of Strapi based projects.

This _audience member_ is a developer who is already developing projects with Strapi. **Reference topics** are meant to be used repetitively as an up-to-date and managed resource for recipes, best practices, and sample code which can be copy/pasted.

Examples include the [Models Guide](/3.0.0-beta.x/guides/models.html#how-to-create-a-model) and the [Controllers Guide](/3.0.0-beta.x/guides/controllers.html).

### Explanations

**Explanations** cover why something was done and provide an understanding of the choices made through the course of the development of Strapi. These are generally written as **Articles** and found in the [Strapi Blog](https://blog.strapi.io).

This _audience member_ is a developer who is already developing projects with Strapi or who is studying whether Strapi is a good fit for their project(s). **Explanations** are meant to explain different choices in the Roadmap, overall direction, and how certain features generally work.

Examples include [Why we split the management of the Admin user and the Front-end Users](https://blog.strapi.io/why-we-split-the-management-of-the-admin-users-and-end-users/) and [Restricting Permissions in Strapi Admin](https://blog.strapi.io/admin-permissions/).

These four categories follow the recommendations found in this article about [documentation by Divio](https://www.divio.com/blog/documentation/). We recommend reading it to gain a complete understanding of each type of content contained in our documentation.

## The Workflow

Please read the following sections before moving to create documentation. (Either new documentation or modifying existing documentation.)

1. [Technical Requirements and the Installation of the Docs](/3.0.0-beta.x/community/contribute-with-docs.html#technical-requirements)
2. [Understanding the Docs Structure](/3.0.0-beta.x/community/contribute-with-docs.html#understanding-the-docs-structure)
3. [Submitting new documentation](/3.0.0-beta.x/community/contribute-with-docs.html#submitting-totally-new-documentation)
4. [Adding/modifying/deleting documentation](/3.0.0-beta.x/community/contribute-with-docs.html#adding-modifying-deleting-content)

- How to [submit an externally hosted tutorial](/3.0.0-beta.x/community/contribute-with-docs.html#submitting-an-externally-hosted-tutorial).
- How to use the [Docs Style Guide](/3.0.0-beta.x/community/contribute-with-docs.html#docs-style-guide) to write better Docs.

### Technical Requirements

1. You have [Node v10.x.x](https://nodejs.org/en/download/) (LTS) or [Node v12.x.x](https://nodejs.org/en/download/current/) and [Yarn v1.2.0+](https://yarnpkg.com/en/).
2. You are familiar with Git, and have it installed on your development environment.

- Ensure you're using the [required versions of Node.js and npm](/3.0.0-beta.x/getting-started/install-requirements.html).
- Fork the [Strapi repository](https://github.com/strapi/strapi) [to your own GitHub account](https://help.github.com/en/articles/fork-a-repo).
- Clone your Strapi repository:

`Path: ./Projects/`

```bash
git clone git@github.com:YOUR_USERNAME/strapi.git
```

- Install the dependencies **for the docs** section of the monorepo:

`Path: ./Projects/`

```bash
cd strapi/docs

yarn install

# OR

npm install
```

- Start the docs development server and open the documentation in the browser:

```bash
yarn dev

# OR

npm run dev
```

- Then, navigate to [http://localhost:8080/documentation/](http://localhost:8080/documentation/).

You should now have a running instance of the documentation. The next section explains the organization and structure of the documentation.

### Understanding the Docs Structure

The Strapi docs are power by [VuePress](https://vuepress.vuejs.org/). The docs live in a folder called **docs**. `Path: ./strapi/docs`. The _VuePress_ installation lives in this folder. It has a separate installation and separate dependencies from the rest of the Strapi monorepo.

Only version **3.0.0-beta.x** is currently maintained. So, therefore, only the documentation for this version is maintained. The documentation is located at `./strapi/docs/3.0.0-beta.x/`. Here you find all the content and assets for the documentation.

The _folder names_ in the file directory correspond to the different sections in the left-hand menu. For example, the folder called, "Getting Started," corresponds to the section called, "Getting Started." However, the `h1` tag at the top of the files control the left-menu titles.

For example, if you add a page or folder, you do it in the config file of the Beta docs. `Path: ./strapi/docs/.versions/3.0.0-beta.x.js/`

For example, if you wanted to add a page under `Getting Started` and the file is called `example-tutorial.md`, you would save the file in the folder called `/getting-started/`. Next, you would modify the config file like the example below:

`Path: ./strapi/docs/.versions/3.0.0-beta.x.js/`

```js
module.exports = [
  {
    collapsable: false,
    title: '🚀 Getting started',
    children: [
      '/3.0.0-beta.x/getting-started/introduction',
      '/3.0.0-beta.x/getting-started/install-requirements',
      '/3.0.0-beta.x/getting-started/quick-start',
      '/3.0.0-beta.x/getting-started/quick-start-tutorial',
      '/3.0.0-beta.x/getting-started/example-tutorial',  // <- Added here
    ],
  },
```

For example, if you now wanted the **left-hand** menu to have a link to **Example Tutorial**, you would need to add an `h1` tag with `Example Tutorial`, like the below example:

```md
# Example Tutorial

This is an Example Tutorial....
```

You should understand that [VuePress]() automatically turns `h2` and `h3` tags into correctly formed **submenu items** and **nested submenu items**. These display in the left-hand navigation underneath the correct article heading as determined by the `h1` tag on the page.

Now, if you need to add images to the file, there is a folder called `assets`, the `Path: ./3.0.0-beta.x/assets`. When you add images, these images need are added to a new folder in the `assets` folder. The name of the folder, should match the name of the file and be placed in a matching directory to the directory of the file.

For example, the `example-tutorial.md` file is located in the `/getting-started/` directory.

```js
module.exports = [
  {
    collapsable: false,
    title: '🚀 Getting started',
    children: [
      '/3.0.0-beta.x/getting-started/example-tutorial',  // <- Added here
    ],
  },
```

Therefore, images are placed in `./assets/getting-started/example-tuturial/image.png`, like this:

```md
DOCS
└───.vuepress
└───.3.0.0-beta.x
│ └───getting-started
│ │ └───example-tutorial.md // Markdown File
│ │
│ └───assets // Image Assets
│ │ └───getting-started // Directory of the Markdown file
│ │ └───example-tutorial // Name of the Markdown File
│ │ image1.jpg
│ │ image2.jpg
│ │ image2.jpg
│ │
│ └───etc
```

**Note:** Images are not linked outside the documentation, but **can** link to an image saved in a different directory. Mainly if the image already exists.

These above guidelines illustrate how to add pages, images, and the structure of the documentation. The documentation is in a language called [Markdown](https://guides.github.com/features/mastering-markdown/), you can do this [Markdown Tutorial](https://www.markdowntutorial.com) to learn how to use Markdown.

### Submitting new documentation

Submitting new documentation generally involves submitting new [Tutorials](/3.0.0-beta.x/community/contribute-with-docs.html#tutorials) or new [How-tos](/3.0.0-beta.x/community/contribute-with-docs.html#how-to-s).

**NOTE:** If you are providing _new examples_ for existing [Reference Topics](http://localhost:8080/documentation/3.0.0-beta.x/community/contribute-with-docs.html#reference-topics), then the next section on [adding, modifying and deleting content](http://localhost:8080/documentation/3.0.0-beta.x/community/contribute-with-docs.html#adding-modifying-deleting-content-from-the-docs) applies.

- Before you start to determine if you're writing a new **Tutorial** or a new **How-to**
- Outline the **Tutorial** or a new **How-to**.
- Speak to a Strapi Maintainer or open an issue on GitHub with the outline to receive feedback.
- Create a GitHub repo with your app for the **Tutorial** or for the code for the **How-to**.
- Show this code to the Strapi Maintainer and address any feedback
- Following the [Docs Style Guide](http://localhost:8080/documentation/3.0.0-beta.x/community/contribute-with-docs.html#docs-style-guide) below, write your Tutorial and make a pull request.

The above steps allow proceeding confidently, knowing your contribution can be accepted.

#### Tips

1. Make sure that following the steps results in a working app (for Tutorials) or working code (for How-tos).
2. Smaller workable apps are better than large apps that have many moving parts.
3. If you have any questions, please ask!

### Adding / Modifying / Deleting Content from the Docs

_Adding, modifying, and deleting content_ from the documentation follows the [guidelines for making a Pull Request](/3.0.0-beta.x/community/contribute-with-code.html#before-submitting-a-pull-request) to the Strapi monorepo. For correcting typos, or clarifications, this is a relatively straightforward process.

**Tutorials** and **How-tos** are sometimes by a members of the community. A byline appears towards the title with a **Written by: Paul Bocuse**. If you make _significant_ revisions to the **Tutorial** or **How-tos**, then the byline would change and include your name, like so: **Original Author: Paul Bocuse, Revised by: Your Name**. You should link to your GitHub from your name.

**Examples** are generally added to **Reference Topics** and **How-tos**. The examples are added directly in the existing content.

### Submitting an Externally Hosted Tutorial

If you have written a **Tutorial**, **How-to** or other teaching material that is _outside_ of the documentation. Then you may submit a pull request with a link to your guide on the [Articles](/3.0.0-beta.x/articles/) page.

### Docs Style Guide

This style guide exists to show and explain the standards and style of how our documentation is written. We are offering this style guide to help you stay consistent with the existing documentation.

---

#### Favor _Yarn_ commands over _npm_ commands

We recommend that users develop using the Yarn package manager. Therefore, the documentation shows commands first using `yarn` and then showing the equivalent `npm` command. Please consider the below examples:

**Example 1**

- Install Strapi with the following commands:

Using **Yarn**:

```bash
yarn create strapi-app my-project --quickstart
```

Using **npm/npx**:

```bash
npx create-strapi-app my-project --quickstart
```

**Example 2**

- You can access the Strapi Help instructions from your command line with:

Using **Yarn**:

```bash
yarn strapi
```

Using **npm**:

```bash
npm run strapi help
```

---

#### When giving instructions, say, _"you"_ not _"we"_

Clear and concise instructions and language can help individuals to get the full advantages from using the Docs. Whenever an action needs doing, you use the word, "you" rather than "we." To clarify this, consider the following examples:

**Example 1**

1. **"You will next open your Chrome browser. Then, open a tab."**
2. **"We will next open our Chrome browser. Then, we will open a tab."**

In the above, the #1 phrase is precise, and the reader knows what is expected. In the #2 phrase, the additional words "we will" is needed to keep the sentence relatively clear. **Note:** "Then, we open a tab." - is awkward and unclear.

**Example 2**

1. **"Download Node.js and install it onto your computer."**
2. **"We download Node.js, and then we install it onto our computers."**

In the above, the #1 phrase is precise. #2 is actually confusing.

Therefore, when you write instructions, use "you." This guide helps to keep the documentation clearly written.

---

#### Ensure to use trade, project and service provider names correctly

Strapi is back-end and front-end agnostic. Many different front-ends and databases can (and will) be used. Also, to front-ends and back-ends, many packages, tools, and third-party service providers are often used with Strapi. Referring to the projects and services correctly is essential. If you use incorrect terms to refer to external services, users could get confused when further research outside the Strapi docs is required.

Common projects and how to refer to them:

| Incorrect Usage     | Correct usage |                   Example                   |
| ------------------- | :-----------: | :-----------------------------------------: |
| mariadb, mariaDB    |    MariaDB    |    The power and flexibility of MariaDB.    |
| mongo, mongodb      |    MongoDB    |     MongoDB is a document database, ...     |
| mysql, MYSQL        |     MySQL     |  You can discuss issues with MySQL users.   |
| Node, NODE, node.js |    Node.js    |   The Node.js Twitter account is @nodejs.   |
| npm, NPM            |      npm      | The current stable version of npm is here.  |
| NPX, Npx, npx       |      npx      | Run packages without downloading using npx. |
| PM2, pm2, Pm2       |      pm2      | Guys just installed pm2 on my live server.  |
| postgressql         |  PostgreSQL   |  Want to learn more about PostgreSQL, ...   |
| React, react.js     |     React     | React allows you to interface with other... |
| SqLite, sqlite      |    SQLite     |       SQLite is in the public domain.       |
| Strapi, Strapi.js   |    Strapi     |   Get ready to get Strapi up and running.   |
| Vue, VUE, Vue.js    | Vue or Vue.js |  My favorite component library for Vue...   |
| yarn, YARN, Yarn    |     Yarn      | You can use Yarn to keep it all up to date. |

---

#### Using images

If you use images in the documentation, it is a best practice to include both HTML **alt text** and **title text**. The **alt text** appears in place of a broken link, and the **title text** appears when someone hovers over the image. Both are used to help with _accessibility_.

Markdown example,

```md
![alt-text](/src/of/the/image.png 'title of image')
```

The following example generates the following logo.

```md
![The Strapi Logo](../assets/contribution-guide/contribute-with-docs/strapi-logo.png 'Strapi Logo')
```

#### The Strapi Logo

![The Strapi Logo](../assets/contribution-guide/contribute-with-docs/strapi-logo.png 'Strapi Logo')

#### Use an unordered list for action steps, number the large sections

There are several reasons for using an unordered list for the **actionable** steps in the documentation.

1. Many developers do not read the theory and are just looking for the steps they need for a specific action. Bullets are an effective way to show this.
2. Using unordered lists ensure all **actionable** steps are consistent throughout the docs and make the experience better for developers.
3. Use ordered lists for explanations or theory in a list format.

See the examples below:

**Example #1**

First, you will set-up a Nuxt.js project.

- Install the **Vue CLI** from your terminal.

```bash
yarn global add @vue/cli

# OR

npm install -g @vue/cli
```

**Example #2**

Getting started with a Node.js:

1. You need to have a Node.js server installed
2. You need to have Git Installed

- Verify the version of Node.js:

```bash
node -v
```

- Verify the version of Git:

```bash
git --version
```

---

#### Indicate the path for commands

Whenever you are asking someone to execute a command or to drop in a file, you indicate the `Path: ./` each time. For example, many tutorials involve going back and forth between the `backend` (Strapi) and `frontend` (Frontend Client), and individuals can get lost as to where to execute commands or install dependencies.

See the examples below:

**Example #1**

- Create and enter a directory named `strapi-tutorial`:

`Path: ./Projects/`

```bash
mkdir strapi-tutorial && cd strapi-tutorial
```

**Example #2**

- Install the Strapi GraphQL plugin with the folllowing command:

`Path:./strapi-tutorial/backend/`

```bash
cd backend

yarn strapi install graphql

# OR

npm run strapi install graphql
```

Indicating the `Path ./` ensures that there are fewer possibilities for errors and misunderstanding.

---

#### Include or reference all steps necessary

Each step necessary to accomplish the goal of the **Tutorial**, **How-to** or **Example** needs to be explained in detail or linked to an external resource that properly explains that particular step. When linking to an external resource, consider and explain which sections or steps to do.

Please see the examples below:

**Example #1**

- Allow access to the **Roles & Permissions** section:
  - (Public) Navigate to the `Roles & Permissions` in the left-hand menu of the Strapi Dashboard
    - Click on the `Public` role
    - Check the `find` and `findone` checkboxes of the `Dish` section
    - Save

**Example #2**

- Install [Yarn](https://yarnpkg.com/en/) by following these instructions: [Yarn installation](https://yarnpkg.com/lang/en/docs/install/)

Never assume steps are apparent. Please make your documentation clear to follow with no missing steps.

---

#### Emphasize concepts using "Note:"

Occasionally, specific concepts or exceptions need to be pointed out _in context_ to the individual reading the documentation. The way to do this is using **Note:**. The markdown is as follows:

```md
**Note:** Important point
```

**Example**

We recommend that you develop using [Yarn](https://yarnpkg.com/en/). **Note:** All commands have equivalent [npm](https://www.npmjs.com/) commands, and you may use these if you prefer.

---

#### Use backticks to enclose typed content and links/buttons to click

Documentation often involves instructing individuals to type out commands and other text. Backticks `` are used to indicate that text or commands need typing. Likewise, use backticks to indicate the button or link text that needs clicking.

There are three scenarios with backticks:

**Example #1**

Use triple backticks before and after code. Enclosing `yarn create strapi-app my-project` in triple backticks generates the following:

```bash
yarn create strapi-app my-project
```

**Example #2**

Use enclosing ticks in the middle of a phrase to enclose a command.

- Use the `yarn add create strapi-app my-project` command to create a new Strapi project.

**Example #3**

Use enclosing ticks in the middle of a phrase to indicate a link to be clicked.

- Click on the `Save` button

---

#### Use American English

Use **American English**, over _British English_, for terminology and word spellings.

**Example**

```md
- American English - CORRECT

"I watched the behavior of the browser."

- British English - INCORRECT

" watched the behaviour of the browsers."
```

---

### Translations

Thank you for your interest in helping with the translation of the documentation. Please open an issue on GitHub stating your desire to translate the documentation.