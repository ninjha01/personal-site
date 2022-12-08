### "Software is eating the world."

In 2011, Marc Andreessen bet on a new type of company that would leverage software to disrupt established players.

Mechanistically, this involves writing software that represents valuable business processes and using the inherent qualities of software to offer a cheaper and/or better product.

- Bits move efficiently over the internet than DVDs over the highway and so Netflix obsoletes Blockbuster.
- Computation is fast. When Google can run advertizer auctions before every piece of content, selling ads piecemeal in a newspaper can't compete.

If you write software that cleanly abstracts over an analog business, then that analog business is dead, and you are rich.

### Software abstracts over the world.

What does it mean to cleanly abstract over something? By definition an abstraction has less information than what was being abstracted. A clean abstraction sifts out the details that aren't relevant, leaving a simpler representation that is easier to work with.

Here's a bad abstraction:

```python
class Dog:
	def bark():
		print("woof!")
```

This code aims to represent (provide an abstraction over) a dog, but removes too much detail. It is very hard (impossible?) to write an abstraction that removes the right complexity of a dog while leaving the important parts. No one has gotten rich by replacing analog dogs with digital code.

Here is a different abstraction.

```
checkout_session = stripe.checkout.Session.create(
        line_items=[
                {
                 'price': f'{PRICE_ID}',
                 'quantity': 1,
                },
        ],
        mode='payment',
        success_url=f'{API_ROOT}/?success=true',
        cancel_url=f'{API_ROOT}/?canceled=true',
)
```

It is more complex than the _Dog_ code, but it provides a clean abstraction over a valuable (perhaps _*the*_ most valuable) business process - transfering money from a customer to a business in exchange for a good or service. You can see the food chain of abstractions clearly here:

- Online Payments eats
  - Swiping a Credit Card eats
    - Handing over Paper Currency eats
      - The Barter System.

People have gotten very rich over these abstractions (Stripe, Visa/Mastercard, Chase).

### Leaky Abstractions

Let's say you want to make a mobile app, and want it on your Apple iPhone and your partner's Google Pixel phone. Unfortunately, an app written for iOS is incompatible with Android. You could write your app twice, and forever double the costs of development and maintanence. Or you could write a translation layer that would sit between your code and the device. This layer would paper over the incompatabilities between (abstract over) these two operating systems. You can imagine this layer being thin, where the developer has to be more aware of the differences between iOS and Android or thick, where they can mostly ignore them.

One of these layers is Flutter. Flutter is a very heavyweight abstraction over mobile operating systems. These OS's provide their own ways to do common things an app will want to do such as showing text or images. A thin abstraction layer would take on the work of picking the right method for the right OS from the developer but would otherwise rely on the underlying functionality provided by the OS.

Flutter does not take this approach. It effectively ignores the underlying OS functionality and handles it internally. It's as if you wanted to abstract over the difference between manual and automatic cars and your solution was to hand the driver a steering wheel controller, strap a VR headset on them, and drive the car based on their inputs and streaming their view of the road through screen on their face.

Perhaps that's too fanciful - I'll be more concrete. By default, if you ask Flutter to display text in your application, the user won't be able to select or copy it. That functionality is provided by the Android or iOS operating systems, and has to be recapitulated.

A strange wrinkle is that Flutter is developed by Google, who make Android. Stranger still, is that a different layer that abstracts over operating systems already exists - websites. You can visit google.com just as easily on iPhones, Pixels, Macbooks or PCs. You probably use the Chrome browser built by Google to do so!

So why create an expensive, overwrought abstraction layer over 2 mobile operating systems when you control one of them and run a thinner, very popular abstraction layer already?

Because the problem Flutter is tackling isn't a technical one. For strategic reasons, Apple hobbles web browsers on iOS to protect the dominance of its App Store. (Ironically on iOS, Google Chrome is just that - Google's chrome, i.e. window dressing, around a web browser controlled by Apple.)

Those engineer-hours at top-of-market compensation were deployed towards, and absorbed by, an abstraction over a strategic problem.

### Software is an abstraction; Software Engineering is a commodity

You can find many good examples of Large Language Models like ChatGPT generating useful units of code. I myself code alongside Github Copilot. At least once a day, I'm impressed by the quality of the contributions it generates. I have no insights into the mechanisms powering these technologies, but my experiences convince me that a significant portion of software engineering can be commoditized.

Software engineers are hired to abstract over expensive business processes, to help their employers eat the world. And we see the returns in our high salaries. But recruiting, hiring, and retaining software engineers is an expensive business process too. The abstractors can be abstracted over.

Perhaps software engineering will not be completely comodotized. At it's best, it is a creative, collaborative process. But not all of software engineering meets that bar. We call that CRUD work, glue work.
Today, I'm happy when Copilot takes that work from me. But what will it take tomorrow? And it will not take complete comodotization for software engineers to feel the impact. Salaries will decrease, surely. But the nature of the work will also change.

### Hiding In The Cracks

I love writing software. It is my craft, and I wish to make my living with it. But the field will change, perhaps rapidly, perhaps because of LLMs.

> Suppose you are a little, nimble guy being chased by a big, fat, bully. You open a door and find yourself in a staircase. Do you go up or down? I say up. The bully can probably run downstairs as fast as you can. Going upstairs his bulk will be more of a disadvantage. Running upstairs is hard for you but even harder for him.

`-- Paul Graham`

But what is "upstairs" of these Large Language Models, or more generally Automation? I think problem spaces that are hard to abstract over. It's hard to abstract over nurses, because their work is very physical and interpersonal. Automating physical prescence seems quite hard, based on the delta between hype and reality concerning self driving cars. But I suspect the truly fundamental obstacle to abstraction is social. We want to be taken care of by humans, not machines.

Any task that has a high degree of interpersonal interaction will be difficult to abstract over because it requires a level of human-like behavior that is difficult to replicate without crossing into the uncanny valley. The closer a robot or AI comes to replicating human behavior, the more we are repelled by its lack of humanity, and the more difficult it becomes to automate the task. The uncanny valley can be thought of as a kind of "uncanny moat" that protects certain tasks from being automated.

But I don't want to be a nurse, what kinds of software engineering are "upstairs"?

I'm betting on user interfaces, because they are built for humans and may have an uncanny moat. Like with Flutter, user interfaces can absorb engineering effort for social reasons such as fashion, or government regulation.

And I'm betting on biotech, because it's a challenging domain that is notoriously hard to abstract over (the cell is not a factory no matter how many times we say it). Unlike UIs, Biology is hard to abstract over for fundamental reasons and so can absorb large amounts of engineering effort.

These are the stairs that are steep and that I can climb quickly. **See you at the top.**
