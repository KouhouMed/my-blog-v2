+++
title = "What is Data Engineering?"
date = "2024-07-03"
author = "Mohamed Kouhou"
tags = ["Data", "Data Engineering"]
+++

# What is Data Engineering?

<img max-height="500" src="https://i.ibb.co/88jNwgg/image-870x-65a25bb5e37bf.jpg">

**Data Engineering** is a relatively new field in data-related topics. When we are talking about data folks, we usually think about two types of responsibilities inside the team:
1. those who _analyze_ the data
2. those who _prepare_ the data for analysis

In the first category there are Data Analysts, Data Scientist, Data Visualization specialists, Product Analysts, etc.

In the second category there are more technical people: Data Engineers, BI developers, DevOps/DataOps.

In many companies this separation is not very strict, though. For example, some Data Scientist may do a job of a Data Engineers, some BI developers can step on a Data Analysts field, etc. But generally speaking, there are those who _work with the data_ and those who _deliver the data_. There is a great quote from British engineer and author Gordon Lindsay Glegg:

> _A scientist can discover a new star, but he cannot make one. He would have to ask an engineer to do it for him._

And I cannot agree more.


# Why do we need Data Engineers, anyway?

According to [some surveys](https://www.forbes.com/sites/gilpress/2016/03/23/data-preparation-most-time-consuming-least-enjoyable-data-science-task-survey-says/#51aacb106f63), Data Scientist can spend about **80% of time preparing the data**.

Now, if you take into consideration the cost of such specialists it becomes clear that it is a waste of time and money. Data Scientist and Data Analysts should spend more time analyzing the data, because it is their core value.

And here is where a Data Engineer is joining the game. Data Engineer is a tech-savvy specialist who can help data teams with many technical data-related topics.

# Areas of responsibilities

Let's talk a bit about activities Data Engineers are responsible for. If we look at the famous [The Data Science Hierarchy of Needs](https://hackernoon.com/the-ai-hierarchy-of-needs-18f111fcc007), we can highlight the following areas:

1. **Data storage**. Data Engineers are responsible for building a reliable data storage to keep all the collected data. This topic includes maintaining databases, data warehouses, data lakes and other types of storages. There are different areas to take care of: where to store the data (in clouds or on-premise), which technologies and frameworks to choose (based on provided use-case), how to maintain and scale such systems.

2. **Data flows**. Data Engineers should know how to collect new data, what data is already available, and how to move the data between the systems. This is usually called as ETL (or ELT, the definition and the difference will be explained in later chapters). We need to move data from a source systems to a data warehouse, we need to build a data aggregates, we need to convert and prepare the data for different systems, and many other activities related to data moving and data transformation.

3. **Data monitoring**. Usually it is not enough to build a data pipeline, it is also important to make sure that it works seamlessly. All data pipelines should be monitored and alerted in case of issues. It will not only rise the quality of data, but also will increase confidence in such data.

# Bringing value

One thing every Data Engineer should always remember – to **bring value** to the business. What is the value of a system which no one uses? What is the value of a system which is faulty and produces incorrect data? Right, there is no value for the business whatsoever.

But how you bring value as a Data Engineer? It's easy, just follow these three rules:

- **Deliver useful and reliable data services.** Everyone should to be confident in your work.

- **Know the client and the needs.** Talk to you client and find the value which he wants to get from you.

- **Deliver solutions which comply with the needs.** Deliver what people expect and even more.


## Cycle of delivering results

These rules sound easy, but are not always easy in practice. To simplify your life, try to follow this **cycle** while you are working on a project:

1. **Clarify all requirements with the client.** Ask about the problem your client wants to solve and about the desired solution.
2. **Make a hypothesis or suggestion.** What client wants is not always what he _really wants_. Try to look at the problem broader, because as a technical person you may see things from a different perspective.
3. **Validate the hypothesis.** Try to build a first solution as simple as possible. Believe me, it will give you a lot of food for thoughts. Show this prototype to your client.
4. **Deliver the result, in iterations.** Given an experience gained from previous step, build an MVP. Gather the feedback and iterate a new (and better) version of your product.

# Communication

And lastly, Data Engineers don't exist in vacuum, they need to communicate with other squads. In general, every DE should talk with:
- backend guys: software engineers, IT, data owners, security specialists
- own team: team lead, other data engineers, analysts, QA
- end-users and business people: data scientists and management

Don't forget to communicate. Tech people tend to avoid talking, but late communication may result in a wasted time and efforts.

# Summary

I hope I didn't scare you with all that stuff and you want to continue your journey to Data Engineering world.

If so, head to the next chapter where I'm going to talk about [Data Engineering roadmap](./data-engineering-roadmap.md) and describe skills of a good Data Engineer.