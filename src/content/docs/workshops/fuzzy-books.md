---
title: 📚fuzzy-books
description: Overview of the fuzzy-books repo.
---

**Build a fuzzy book search using PGVector, Supabase, and OpenAI embeddings.**  
This repo is used for the first talk in the Scottish DevTools meetup series.\
👉 <a href="https://github.com/Scottish-DevTools-Meetup/fuzzy-books" target="blank">Link to the fuzzy-books repo</a>

---

## 🧠 What We're Building

A **vector-based search engine** for books, powered by:

- 🧠 **Embeddings** from OpenAI
- 🐘 **PGVector** extension inside Supabase Postgres
- 🛠️ **SQL queries** using `cosine_distance`
- 🌍 A simple **frontend UI** for querying similar books

The end result? A search box that returns thematically similar books — even if they don't share keywords.

---

## 📅 Meetup Format

This talk is **hands-on and branch-based**:

- 12–15 Git branches represent each step toward a working fuzzy search
- You can follow along during the meetup or explore later at your own pace
- Each branch is named clearly and builds incrementally on the last

---

## 🏁 Prerequisites

- A free [Supabase](https://supabase.com) account
- Node.js + npm installed
- OpenAI API key (for generating embeddings)
- Basic knowledge of SQL / JavaScript

---

## 🗺️ Branch Guide

| Branch | Description |
|--------|-------------|
| `00-setup` | Project skeleton, .env template, README |
| `01-books-schema` | Set up book table and vector column |
| `02-embeddings-fn` | Add SQL function to store embeddings |
| ... | *(More coming soon as we prep the talk)* |

---

## 👥 Talk Hosts

This repo is maintained by the **Scottish DevTools** team.

- **Alan Mathieson** – Co-organiser, engineer, and speaker for this session
- **Cameron Blackwood** – Co-organiser, Supabase specialist

---

## 🧵 Feedback or Ideas?

Feel free to open an issue or discussion – this repo will evolve with your input.