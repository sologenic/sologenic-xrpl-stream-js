[typescript](../README.md) › [Globals](../globals.md) › ["fs"](_fs_.md) › [constants](_fs_.constants.md)

# Module: constants

## Index

### Variables

* [COPYFILE_EXCL](_fs_.constants.md#const-copyfile_excl)
* [COPYFILE_FICLONE](_fs_.constants.md#const-copyfile_ficlone)
* [COPYFILE_FICLONE_FORCE](_fs_.constants.md#const-copyfile_ficlone_force)
* [F_OK](_fs_.constants.md#const-f_ok)
* [O_APPEND](_fs_.constants.md#const-o_append)
* [O_CREAT](_fs_.constants.md#const-o_creat)
* [O_DIRECT](_fs_.constants.md#const-o_direct)
* [O_DIRECTORY](_fs_.constants.md#const-o_directory)
* [O_DSYNC](_fs_.constants.md#const-o_dsync)
* [O_EXCL](_fs_.constants.md#const-o_excl)
* [O_NOATIME](_fs_.constants.md#const-o_noatime)
* [O_NOCTTY](_fs_.constants.md#const-o_noctty)
* [O_NOFOLLOW](_fs_.constants.md#const-o_nofollow)
* [O_NONBLOCK](_fs_.constants.md#const-o_nonblock)
* [O_RDONLY](_fs_.constants.md#const-o_rdonly)
* [O_RDWR](_fs_.constants.md#const-o_rdwr)
* [O_SYMLINK](_fs_.constants.md#const-o_symlink)
* [O_SYNC](_fs_.constants.md#const-o_sync)
* [O_TRUNC](_fs_.constants.md#const-o_trunc)
* [O_WRONLY](_fs_.constants.md#const-o_wronly)
* [R_OK](_fs_.constants.md#const-r_ok)
* [S_IFBLK](_fs_.constants.md#const-s_ifblk)
* [S_IFCHR](_fs_.constants.md#const-s_ifchr)
* [S_IFDIR](_fs_.constants.md#const-s_ifdir)
* [S_IFIFO](_fs_.constants.md#const-s_ififo)
* [S_IFLNK](_fs_.constants.md#const-s_iflnk)
* [S_IFMT](_fs_.constants.md#const-s_ifmt)
* [S_IFREG](_fs_.constants.md#const-s_ifreg)
* [S_IFSOCK](_fs_.constants.md#const-s_ifsock)
* [S_IRGRP](_fs_.constants.md#const-s_irgrp)
* [S_IROTH](_fs_.constants.md#const-s_iroth)
* [S_IRUSR](_fs_.constants.md#const-s_irusr)
* [S_IRWXG](_fs_.constants.md#const-s_irwxg)
* [S_IRWXO](_fs_.constants.md#const-s_irwxo)
* [S_IRWXU](_fs_.constants.md#const-s_irwxu)
* [S_IWGRP](_fs_.constants.md#const-s_iwgrp)
* [S_IWOTH](_fs_.constants.md#const-s_iwoth)
* [S_IWUSR](_fs_.constants.md#const-s_iwusr)
* [S_IXGRP](_fs_.constants.md#const-s_ixgrp)
* [S_IXOTH](_fs_.constants.md#const-s_ixoth)
* [S_IXUSR](_fs_.constants.md#const-s_ixusr)
* [UV_FS_O_FILEMAP](_fs_.constants.md#const-uv_fs_o_filemap)
* [W_OK](_fs_.constants.md#const-w_ok)
* [X_OK](_fs_.constants.md#const-x_ok)

## Variables

### `Const` COPYFILE_EXCL

• **COPYFILE_EXCL**: *number*

Defined in node_modules/@types/node/fs.d.ts:1575

Constant for fs.copyFile. Flag indicating the destination file should not be overwritten if it already exists.

___

### `Const` COPYFILE_FICLONE

• **COPYFILE_FICLONE**: *number*

Defined in node_modules/@types/node/fs.d.ts:1581

Constant for fs.copyFile. copy operation will attempt to create a copy-on-write reflink.
If the underlying platform does not support copy-on-write, then a fallback copy mechanism is used.

___

### `Const` COPYFILE_FICLONE_FORCE

• **COPYFILE_FICLONE_FORCE**: *number*

Defined in node_modules/@types/node/fs.d.ts:1587

Constant for fs.copyFile. Copy operation will attempt to create a copy-on-write reflink.
If the underlying platform does not support copy-on-write, then the operation will fail with an error.

___

### `Const` F_OK

• **F_OK**: *number*

Defined in node_modules/@types/node/fs.d.ts:1561

Constant for fs.access(). File is visible to the calling process.

___

### `Const` O_APPEND

• **O_APPEND**: *number*

Defined in node_modules/@types/node/fs.d.ts:1617

Constant for fs.open(). Flag indicating that data will be appended to the end of the file.

___

### `Const` O_CREAT

• **O_CREAT**: *number*

Defined in node_modules/@types/node/fs.d.ts:1601

Constant for fs.open(). Flag indicating to create the file if it does not already exist.

___

### `Const` O_DIRECT

• **O_DIRECT**: *number*

Defined in node_modules/@types/node/fs.d.ts:1643

Constant for fs.open(). When set, an attempt will be made to minimize caching effects of file I/O.

___

### `Const` O_DIRECTORY

• **O_DIRECTORY**: *number*

Defined in node_modules/@types/node/fs.d.ts:1620

Constant for fs.open(). Flag indicating that the open should fail if the path is not a directory.

___

### `Const` O_DSYNC

• **O_DSYNC**: *number*

Defined in node_modules/@types/node/fs.d.ts:1637

Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O with write operations waiting for data integrity.

___

### `Const` O_EXCL

• **O_EXCL**: *number*

Defined in node_modules/@types/node/fs.d.ts:1604

Constant for fs.open(). Flag indicating that opening a file should fail if the O_CREAT flag is set and the file already exists.

___

### `Const` O_NOATIME

• **O_NOATIME**: *number*

Defined in node_modules/@types/node/fs.d.ts:1628

constant for fs.open().
Flag indicating reading accesses to the file system will no longer result in
an update to the atime information associated with the file.
This flag is available on Linux operating systems only.

___

### `Const` O_NOCTTY

• **O_NOCTTY**: *number*

Defined in node_modules/@types/node/fs.d.ts:1611

Constant for fs.open(). Flag indicating that if path identifies a terminal device,
opening the path shall not cause that terminal to become the controlling terminal for the process
(if the process does not already have one).

___

### `Const` O_NOFOLLOW

• **O_NOFOLLOW**: *number*

Defined in node_modules/@types/node/fs.d.ts:1631

Constant for fs.open(). Flag indicating that the open should fail if the path is a symbolic link.

___

### `Const` O_NONBLOCK

• **O_NONBLOCK**: *number*

Defined in node_modules/@types/node/fs.d.ts:1646

Constant for fs.open(). Flag indicating to open the file in nonblocking mode when possible.

___

### `Const` O_RDONLY

• **O_RDONLY**: *number*

Defined in node_modules/@types/node/fs.d.ts:1592

Constant for fs.open(). Flag indicating to open a file for read-only access.

___

### `Const` O_RDWR

• **O_RDWR**: *number*

Defined in node_modules/@types/node/fs.d.ts:1598

Constant for fs.open(). Flag indicating to open a file for read-write access.

___

### `Const` O_SYMLINK

• **O_SYMLINK**: *number*

Defined in node_modules/@types/node/fs.d.ts:1640

Constant for fs.open(). Flag indicating to open the symbolic link itself rather than the resource it is pointing to.

___

### `Const` O_SYNC

• **O_SYNC**: *number*

Defined in node_modules/@types/node/fs.d.ts:1634

Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O.

___

### `Const` O_TRUNC

• **O_TRUNC**: *number*

Defined in node_modules/@types/node/fs.d.ts:1614

Constant for fs.open(). Flag indicating that if the file exists and is a regular file, and the file is opened successfully for write access, its length shall be truncated to zero.

___

### `Const` O_WRONLY

• **O_WRONLY**: *number*

Defined in node_modules/@types/node/fs.d.ts:1595

Constant for fs.open(). Flag indicating to open a file for write-only access.

___

### `Const` R_OK

• **R_OK**: *number*

Defined in node_modules/@types/node/fs.d.ts:1564

Constant for fs.access(). File can be read by the calling process.

___

### `Const` S_IFBLK

• **S_IFBLK**: *number*

Defined in node_modules/@types/node/fs.d.ts:1663

Constant for fs.Stats mode property for determining a file's type. File type constant for a block-oriented device file.

___

### `Const` S_IFCHR

• **S_IFCHR**: *number*

Defined in node_modules/@types/node/fs.d.ts:1660

Constant for fs.Stats mode property for determining a file's type. File type constant for a character-oriented device file.

___

### `Const` S_IFDIR

• **S_IFDIR**: *number*

Defined in node_modules/@types/node/fs.d.ts:1657

Constant for fs.Stats mode property for determining a file's type. File type constant for a directory.

___

### `Const` S_IFIFO

• **S_IFIFO**: *number*

Defined in node_modules/@types/node/fs.d.ts:1666

Constant for fs.Stats mode property for determining a file's type. File type constant for a FIFO/pipe.

___

### `Const` S_IFLNK

• **S_IFLNK**: *number*

Defined in node_modules/@types/node/fs.d.ts:1669

Constant for fs.Stats mode property for determining a file's type. File type constant for a symbolic link.

___

### `Const` S_IFMT

• **S_IFMT**: *number*

Defined in node_modules/@types/node/fs.d.ts:1651

Constant for fs.Stats mode property for determining a file's type. Bit mask used to extract the file type code.

___

### `Const` S_IFREG

• **S_IFREG**: *number*

Defined in node_modules/@types/node/fs.d.ts:1654

Constant for fs.Stats mode property for determining a file's type. File type constant for a regular file.

___

### `Const` S_IFSOCK

• **S_IFSOCK**: *number*

Defined in node_modules/@types/node/fs.d.ts:1672

Constant for fs.Stats mode property for determining a file's type. File type constant for a socket.

___

### `Const` S_IRGRP

• **S_IRGRP**: *number*

Defined in node_modules/@types/node/fs.d.ts:1692

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by group.

___

### `Const` S_IROTH

• **S_IROTH**: *number*

Defined in node_modules/@types/node/fs.d.ts:1704

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by others.

___

### `Const` S_IRUSR

• **S_IRUSR**: *number*

Defined in node_modules/@types/node/fs.d.ts:1680

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by owner.

___

### `Const` S_IRWXG

• **S_IRWXG**: *number*

Defined in node_modules/@types/node/fs.d.ts:1689

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by group.

___

### `Const` S_IRWXO

• **S_IRWXO**: *number*

Defined in node_modules/@types/node/fs.d.ts:1701

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by others.

___

### `Const` S_IRWXU

• **S_IRWXU**: *number*

Defined in node_modules/@types/node/fs.d.ts:1677

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by owner.

___

### `Const` S_IWGRP

• **S_IWGRP**: *number*

Defined in node_modules/@types/node/fs.d.ts:1695

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by group.

___

### `Const` S_IWOTH

• **S_IWOTH**: *number*

Defined in node_modules/@types/node/fs.d.ts:1707

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by others.

___

### `Const` S_IWUSR

• **S_IWUSR**: *number*

Defined in node_modules/@types/node/fs.d.ts:1683

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by owner.

___

### `Const` S_IXGRP

• **S_IXGRP**: *number*

Defined in node_modules/@types/node/fs.d.ts:1698

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by group.

___

### `Const` S_IXOTH

• **S_IXOTH**: *number*

Defined in node_modules/@types/node/fs.d.ts:1710

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by others.

___

### `Const` S_IXUSR

• **S_IXUSR**: *number*

Defined in node_modules/@types/node/fs.d.ts:1686

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by owner.

___

### `Const` UV_FS_O_FILEMAP

• **UV_FS_O_FILEMAP**: *number*

Defined in node_modules/@types/node/fs.d.ts:1717

When set, a memory file mapping is used to access the file. This flag
is available on Windows operating systems only. On other operating systems,
this flag is ignored.

___

### `Const` W_OK

• **W_OK**: *number*

Defined in node_modules/@types/node/fs.d.ts:1567

Constant for fs.access(). File can be written by the calling process.

___

### `Const` X_OK

• **X_OK**: *number*

Defined in node_modules/@types/node/fs.d.ts:1570

Constant for fs.access(). File can be executed by the calling process.
