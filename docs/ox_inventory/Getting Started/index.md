---
title: Getting Started
sidebar_position: 1
slug: ./../
---

import IconButton from '@site/src/components/IconButton';
import { BsGithub, BsBookHalf } from 'react-icons/bs';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

This resource is being designed with the intention of providing advanced functionality while remaining easy to use,
however it is not recommended for beginners. You must possess a basic understanding of coding and the ability to read;
otherwise you **should not** install this resource.
:::

## Dependencies

### OxMySQL

We utilise our own resource to communicate with MySQL databases via the node-mysql2 package.
The backend is actively maintained and updated unlike the package used by mysql-async, providing improved performance, security, and features.
We provide full backwards compatibility with mysql-async and build for the current Cfx architecture.

<div style={{ display: 'flex' }}>
  <a href="https://www.github.com/overextended/oxmysql/releases/latest" style={{ marginRight: '0.6rem' }}>
    <IconButton side="left" icon={<BsGithub />}>
      GitHub
    </IconButton>
  </a>
  <a href="../oxmysql">
    <IconButton side="left" icon={<BsBookHalf />}>
      Documentation
    </IconButton>
  </a>
</div>

### Ox Library

Provides easily reusable functions that can be imported into your resource or called with exports.

**Used in the inventory for**

- SetInterval
- Server Callbacks
- Requesting models, animations, etc.
- Marker management
- Notifications and progress bar

<div style={{ display: 'flex' }}>
  <a href="https://www.github.com/overextended/ox_lib/releases/latest" style={{ marginRight: '0.6rem' }}>
    <IconButton side="left" icon={<BsGithub />}>
      GitHub
    </IconButton>
  </a>
  <a href="../ox_lib">
    <IconButton side="left" icon={<BsBookHalf />}>
      Documentation
    </IconButton>
  </a>
</div>

## Optional Dependencies

The resources listed under here **aren't** necessary for the inventory to work but still have full support.

### qtarget

A high performance targeting solution based on bt-target, and the basis for qb-target.
It is being updated alongside Ox Inventory to improve support as well as add compatibility when using QBCore or migrating from bt-target.
All stashes and shops will utilise PolyZone's instead of markers to interact with them.

:::caution

If you wish to use it first you must ensure that qtarget is enabled in the resource convars.
You will need to enable compatibility manually by adjusting your config - more information provided below.

You must start qtarget before the inventory and after your framework.
:::

<div style={{ display: 'flex' }}>
  <a href="https://www.github.com/overextended/qtarget" style={{ marginRight: '0.6rem' }}>
    <IconButton side="left" icon={<BsGithub />}>
      GitHub
    </IconButton>
  </a>
  <a href="https://overextended.github.io/qtarget/">
    <IconButton side="left" icon={<BsBookHalf />}>
      Documentation
    </IconButton>
  </a>
</div>

### NPWD

A standalone and feature-rich phone created by Project Error.

The inventory will handle disabling the phone when the player has no item, and supports toggling the phone through item use.

<div style={{ display: 'flex' }}>
  <a href="https://www.github.com/project-error/npwd" style={{ marginRight: '0.6rem' }}>
    <IconButton side="left" icon={<BsGithub />}>
      GitHub
    </IconButton>
  </a>
  <a href="https://projecterror.dev/docs">
    <IconButton side="left" icon={<BsBookHalf />}>
      Documentation
    </IconButton>
  </a>
</div>

## Installation

### Production Build

The user interface included with the source code must be compiled.  
You can compile it youself by following the [build guide](./Guides/inventory_ui), otherwise download a production build below.

<div style={{ width: 'fit-content' }}>
  <a href="https://www.github.com/overextended/ox_inventory/releases/latest" style={{ marginRight: '0.6rem' }}>
    <IconButton side="left" icon={<BsGithub />}>
      GitHub
    </IconButton>
  </a>
</div>

### Setup

If you are using a supported framework, refer to the dedicated guide in the navigation bar.

#### Custom Framework

Integration between your framework and ox_inventory should be relatively simple if you aren't replacing and attempting to support backwards-compatibility with an existing inventory system.

You should first reference the [mysql](https://github.com/overextended/ox_inventory/blob/main/modules/mysql/server.lua) module and setup appropriate table and column names.
```lua
	elseif shared.framework == 'myframework' then
		playerTable = 'characters' -- table storing player / character data
		playerColumn = 'charid'    -- primary key for identifying the character (i.e. identifier, citizenid, id)
		vehicleTable = 'vehicles'  -- table storing owned vehicle data
		vehicleColumn = 'id'       -- primary key for identifying the vehicle (i.e. plate, vin, id)
	end
```

You will need events and functions to handle licenses, owned vehicles, and job systems; these should be handled in the "bridge" module.

If your framework doesn't have its own inventory system or you don't care about compatibility, it may be easier to refer to the incredibly barebones [ox bridge](https://github.com/overextended/ox_inventory/tree/main/modules/bridge/ox) (used by ox_core).

Refer to the [esx bridge](https://github.com/overextended/ox_inventory/tree/main/modules/bridge/esx) or [qbcore bridge](https://github.com/overextended/ox_inventory/tree/main/modules/bridge/qb) to get an idea of replacing existing inventories.

... todo: more information, work on a bridge template

:::caution

You should restart your server after the first startup to ensure everything has been correctly setup
:::