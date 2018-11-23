# Why I Use a Program that's Twice My Age

What's the first program you launch when you boot up your computer? I suspect for most people the answer is Chrome. If you're especially #woke it might be Firefox. Or maybe you're like a friend of mine, and have the same awe-inspiring psychosis that compels him to launches a Windows VM on his Mac to run the Edge Browser. Listen, I'm not here to judge. Whatever works for you. Let's talk about how old these programs are. The Edge Browser is 3 years old, and probably has as many users. Chrome is just over a decade old. Firefox is 16 going on 17. What's the oldest application that the average person uses regularly? Nowadays, most people rarely use a desktop outside of the workplace, and all iOS and Android apps can't be that much older than a decade because that's how old the platform itself is. In the grand scheme of things, almost all user-facing applications are shockingly young. So then why-oh-why is the first app I launch a 42 year-old program?

Well, Emacs is still under active development. In fact the latest update came just a few months ago. And because of this, its age can actually be considered a strength. While younger applications are almost definitionally more modern and accessible, they don't have the over 4 decades of engineering that Emacs can tap into.

# What _is_ Emacs?

So now you might be curious - what exactly *is* Emacs? It must be something pretty important to warrant 40+ years of continuous development. At the very least it must have a blockchain-based neural net inside it. Well, no. Emacs is a text editor. It displays text on a screen, and lets you edit it. That's its killer app.

This may seem like a bit of a let down, but think about how important, and actually all encompasing that task is. As a programmer by trade, it's the essence of my job. I craft and manipulate words, and eventually something interesting happens. But first I have to read and write text. And it's not just writing programs - most white-collar work is just creating and moving and deleting text - emails and spreadsheets are essentially all text, and documents and slides usually have a significant textual component as well.

But why fire up Emacs over Microsoft Office, or GSuite? For one, and this is a personal opinion, Office is just ugly. 

<pic here>

GSuite is less so, but it still clutters up the interface more than I'd like. 

<pic here>

For two, Emacs' focus is on the editing of the text itself, not the presentation. Office and GSuite use a What-You-See-Is-What-You-Get or WYSIWYG interface, where you can mold the text to look the way you want within the editor itself. WYSIWYG is a very user-friendly interface and has become dominant for a lot of reasons. So dominant that many people haven't had any experience with non-WYSIWYG at all! For the programmer, or the novelist, or the journalist, or the scriptwriter, or anyone who works with text for a living, there is a lot of benefit to be gained by letting go of WYSIWYG.

In my opinion, the first big gain is beauty. And if you don't like the application of such a romantic word to program, I'll offer up an alternative: simplicity. A chef's knife has less utility than a swiss army knife. But by stripping away the tiny scizzors, the bottle opener, the nail file, and focusing on _cutting_, the chef's knife is more aesthetically pleasing. Simplicity and beauty are linked in this way, but so is productivity. The chef's knife is not fundamentally aesthetic - it's a tool. It has a job. So too, with emacs.

Now, anyone with any hands-on familiarity with emacs may be getting a bit upset with this comparison. And with good reason - when you first boot up emacs it looks like this:

[pic here]

I'll admit it, emacs definitely shows its age - at first. But unlike Microsoft Office or GSuite, we're able to sit Emacs down and teach it how to put on some makeup. We're able to do this because Emacs is a programmable text editor - you can change how it behaves on the fly. I don't want to scare less technically-minded folks off, at least not right off the bat. All this means is that if I don't like the ugly toolbar that shows up at the top, I can do something about it. Typing and running the command `(tool-bar-mode -1)` will remove that toolbar.

[pic here]

If, while in the midst of an essay or program or novel I decide that I would like to use the toolbar after all, I simply type the command `(tool-bar-mode -1)` to make it reappear. This is a simple, trivial, perhaps boring example of the power the user wields over Emacs, but I hope it gives you a few ideas. Scrolling through my own Emacs modifications, I've altered nearly aspect of the editor - from the anatomy of the editor to the look of the text to how I move between files.

I've used Emacs for a little over 3 years, and through that process have shaped and molded the editor to suit me. It is my knife. If you like the idea of forging and honing a tool so that it fits not only your hand but your mind, take a look at Emacs. And don't think this process is a solitary one - 40+ years of development mean 40+ years of community. In my experience, a community that is friendly and eager to teach. Popular modifications are available freely. If you run into a problem with how Emacs looks or behaves, chances are you're not the first, and a drop-in fix is ready in the wings.


# Preamble

installing emacs
emacs, emacs -nw, emacs -q, emacs --daemon

# Why emacs?
(+ 2 3)
(print "Hello")
(tool-bar-mode -1)
(tool-40bar-mode 1)

# Setup
Rebinding Caps Lock
(setq mac-option-modifier 'meta)
Cancel Command C-g
Kill and Yank Text
Aesthetics: Themes, Font

# Emacs Anatomy
What are Frames, Windows, and Buffers?
Opening/Closing Files
Buffer manipulation
M-x shell

# Usable Emacs
Ido
Company
Flycheck
