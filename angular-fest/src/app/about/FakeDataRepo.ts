export interface InfoRepo {
    title: string;
    desc: string;
    selected: boolean;
}

export class FakeDataRepo {
    javaData: InfoRepo[] = [
        {
            title: 'JVM',
            desc: 'JVM (Java Virtual Machine) is an abstract machine. It is called a virtual machine because it doesn\'t physically exist. It is a specification that provides a runtime environment in which Java bytecode can be executed. It can also run those programs which are written in other languages and compiled to Java bytecode.',
            selected: false
        },
        {
            title: 'JRE',
            desc: 'JRE is an acronym for Java Runtime Environment. It is also written as Java RTE. The Java Runtime Environment is a set of software tools which are used for developing Java applications. It is used to provide the runtime environment. It is the implementation of JVM. It physically exists. It contains a set of libraries + other files that JVM uses at runtime.',
            selected: false
        },
        {
            title: 'JDK',
            desc: 'JDK is an acronym for Java Development Kit. The Java Development Kit (JDK) is a software development environment which is used to develop Java applications and applets. It physically exists. It contains JRE + development tools.',
            selected: false
        },
        {
            title: 'Java Applet',
            desc: 'Applet is a special type of program that is embedded in the webpage to generate the dynamic content. It runs inside the browser and works at client side.',
            selected: false
        },
        {
            title: 'JavaFX',
            desc: 'JavaFX is a Java library used to develop Desktop applications as well as Rich Internet Applications (RIA). The applications built in JavaFX, can run on multiple platforms including Web, Mobile and Desktops.',
            selected: false
        }
    ];

    javascriptData: InfoRepo[] = [
        {
            title: 'Document Object Model',
            desc: 'The document object represents the whole html document. When html document is loaded in the browser, it becomes a document object. It is the root element that represents the html document. It has properties and methods. By the help of document object, we can add dynamic content to our web page.',
            selected: false
        },
        {
            title: 'Cookies',
            desc: 'A cookie is an amount of information that persists between a server-side and a client-side. A web browser stores this information at the time of browsing. A cookie contains the information as a string generally in the form of a name-value pair separated by semi-colons. It maintains the state of a user and remembers the user\'s information among all the web pages.',
            selected: false
        },
        {
            title: 'Events',
            desc: 'The change in the state of an object is known as an Event. In html, there are various events which represents that some activity is performed by the user or by the browser. When javascript code is included in HTML, js react over these events and allow the execution. This process of reacting over the events is called Event Handling. Thus, js handles the HTML events via Event Handlers.',
            selected: false
        },
        {
            title: 'Promise',
            desc: 'In javascript, a Promise is an object which ensures to produce a single value in the future (when required). Promise in javascript is used for managing and tackling asynchronous operations.',
            selected: false
        }
    ];

    pythonData: InfoRepo[] = [
        {
            title: 'sys module',
            desc: 'The python sys module provides functions and variables which are used to manipulate different parts of the Python Runtime Environment. It lets us access system-specific parameters and functions.',
            selected: false
        },
        {
            title: 'OS Module',
            desc: 'Python OS module provides the facility to establish the interaction between the user and the operating system. It offers many useful OS functions that are used to perform OS-based tasks and get related information about operating system.',
            selected: false
        },
        {
            title: 'Generators',
            desc: 'Python Generators are the functions that return the traversal object and used to create iterators. It traverses the entire items at once. The generator can also be an expression in which syntax is similar to the list comprehension in Python.',
            selected: false
        },
        {
            title: 'Decorator',
            desc: 'Decorators are one of the most helpful and powerful tools of Python. These are used to modify the behavior of the function. Decorators provide the flexibility to wrap another function to expand the working of wrapped function, without permanently modifying it.',
            selected: false
        }
    ];

    cppData: InfoRepo[] = [
        {
            title: 'Structure',
            desc: 'A structure is a grouping of variables of various data types referenced by the same name. A structure declaration serves as a template for creating an instance of the structure.',
            selected: false
        },
        {
            title: 'Reference',
            desc: 'A reference is a variable that is referred to as another name for an already existing variable. The reference of a variable is created by storing the address of another variable.',
            selected: false
        },
        {
            title: 'Pointer',
            desc: 'A pointer is a variable that contains the address of another variable. It can be dereferenced with the help of (*) operator to access the memory location to which the pointer points.',
            selected: false
        },
        {
            title: 'Bit manipulation',
            desc: 'Bit manipulation is defined as performing some basic operations on bit level of n number of digits. It is a speedy and primitive method as it directly works at the machine end.',
            selected: false
        }
    ];

    requestData(lang: string) {
        if (lang == "Java")
            return this.javaData;
        else if (lang == "Javascript")
            return this.javascriptData;
        else if (lang == "Python")
            return this.pythonData;
        else
            return this.cppData;
    }
}