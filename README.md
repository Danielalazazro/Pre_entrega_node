# FakeStore API CLI

Cliente de linea de comandos en Node.js para interacturar con [FakeStore API] (https://fakestoreapi.com/) usando los metodos http principales

## Descripcion

Este script permite realizar operaciones CRUD sobre productos de la FakeStore API directamente desde la terminal , soportando los metodos **GET** , **POST**, **PUT** y **DELETE**

## Requisitos

-[Node.js](https://nodejs.org) v18 o superior (soporte nativo de 'fetch')

## Uso

```bash 
npm run start <method> <endpoint> [args...]
```

## Metodos disponibles

### GET - Obtener todos los productos

```bash
npm run start GET products
```

### GET - Obtener un producto por ID

```bash
npm run start GET prodcuts/5
```

### POST - Crear un nuevo producto 

```bash
npm run start POST products T-Shirt-Rex 300 remeras
```
> **Args:** `titulo` `precio` `categoria`

### PUT - Actualizar un  producto existente

```bash
npm run start PUT products/2 T-Short-Rex 300 bermudas
```
> **Args:** `titulo` `precio` `categoria`

### DELETE - ELimina un producto

```bash
npm run start DELETE products/7 
```

## Estructura del proyecto

```
|__ index.js        #Script principal con el manejo de metodos HTTP
|
|_ Readme.md        