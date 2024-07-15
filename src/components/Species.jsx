export const Species = ({ type }) => {
    let returnable = null;
    switch (type) {
        case "Humans":
            returnable = <section id={"human"}>
                <h3>Humans</h3>
                <section>
                    <h5>Introduction</h5>
                    <p>Humans are the most diverse of all the races of Ansalon.
                        They are often incapable of seeing the other races as
                        more than humans with additional traits or extremes
                        of personality, perhaps because of their own incredibly
                        varied physical appearance, cultural diversity, and sheer
                        numbers. Humans are tall or short, dark-skinned or lightskinned,
                        slender or stocky. Those physical characteristics
                        they do have in common with one another are, as a result,
                        characteristics they share with all other humanoid races.
                    </p>
                    <p>As a general rule, humans are Medium-sized, usually
                        between five and six feet in height, although there are
                        significant examples of taller or shorter individuals. Their
                        average weight falls between 115 and 225 pounds. Women
                        are usually shorter and lighter than men, but in some
                        cultures, this may be reversed. Humans have no inherent
                        extraordinary or supernatural abilities, such as enhanced
                        vision; however, their ability to learn, grow, and acquire
                        extraordinary talents is well known. Indeed, some of
                        Krynn’s greatest mages, priests, warriors, and artisans have
                        been human.
                    </p>
                    <section>
                        <h5>Townsfolk</h5>
                        <p>Villagers, townsfolk, and city-dwelling humans make up the
                            largest racial group on Ansalon. They can be found almost
                            everywhere, whether they truly belong there or not. This
                            widespread population also makes for great diversity in
                            culture and attitude. Settled humans cannot truly be
                            defined as a unified group because each country, city, or
                            town has it's own appearance and personality. Rude
                            innkeepers, benevolent priests, pitiful beggars, hardened
                            mercenaries, and cunning pickpockets can be found in most
                            every village, town, or city on Ansalon.
                        </p>
                        <p>
                            Being so prolific and successful, nations of
                            humans often come into conflict with each other and other
                            races. However, despite these conflicts, many humans have
                            worked hard to live peacefully with the other races—even
                            as other humans have worked to subjugate or war with
                            them.
                        </p>
                        <p>City life during the Age of Despair is chaotic. The
                            Cataclysm flooded entire nations and landlocked others,
                            destroying the trade routes for nearly every major city of
                            Ansalon. Changes in the climate ravaged crops. What little
                            food could be salvaged or grown - if it wasn't stolen - was
                            hoarded. The meager amount of food that could be
                            delivered to the cities was bought up by wealthy clientele
                            for outrageous prices, leaving the poor to beg or filch
                            whatever they could find.
                        </p>
                        <p>Without healers, disease ran rampant and plague
                            spread like wildfire. Most citizens lived in squalor,
                            cowering amidst the ruins of buildings or hunkered
                            down in wooden shacks. Over the course of centuries, the
                            situation has gradually improved, but while some cities
                            have prospered, others remain locked in despair, filth, and
                            poverty.
                        </p>
                        <section className={"card p-3"}>
                            <h5>Townsfolk</h5>
                            <ul>
                                <li>Speed: 6</li>
                                <li>Can be a mage</li>
                                <li>Ability: <i>Adaptive</i>: WP 3. When rolling for
                                    a skill, you can choose to make the roll using
                                    another skill of your choice. However, you must be
                                    able to justify how you use the selected skill
                                    instead of the normal one. The GM has the final
                                    say.
                                </li>
                            </ul>
                        </section>
                    </section>
                    <section className={"mt-3"}>
                        <h5>Nomads</h5>
                        <p>For hundreds of years before the first permanent dwellings
                            were erected and their ancestors decided to stay in one
                            place, humans roamed the length and breadth of Ansalon.
                            These nomads lived off the land, existing in harmony with
                            nature. Today these people are thought of as primitive,
                            barbarian, and savage. However, regardless of how others
                            think of them, nomads take fierce pride in the ability of
                            their people to exist, and even thrive, in lands others shun
                            as inhospitable. Mountains, forests, plains, tundra, and
                            deserts are places nomads have conquered and still call
                            home today.
                        </p>
                        <p>The nomadic people of Ansalon have always felt a deep
                            connection with nature. The destruction wrought by the
                            Cataclysm confused and frightened them. To the wandering
                            peoples of Ansalon, who live daily by following the
                            changes of season and the migration of beasts, the physical
                            changes in the world proved devastating. Many urban
                            communities saw their nomadic neighbors as easy prey and
                            attacked them. Such actions served to heighten the
                            suspicion and distrust between nomads and city dwellers.
                        </p>
                        <p>Over the generations, the nomads were able to
                            establish fresh hunting grounds and track the new
                            migrations of animals, their lives improved. Lacking the
                            uniting force of the gods, however, many tribes splintered,
                            while others waited patiently and chose to accept the gods'
                            silence as the supreme test of their devotion.
                            Of the tribes that remained intact, most worshipped
                            deities of their own invention modeled after familiar
                            aspects of the true gods. The gods of these nomads had
                            their own names and identities. Worship of the gods of
                            townsfolk was expressly forbidden. The nomad tribes
                            highly venerated the spirits of their ancestors who had
                            gone before them, and eventually, the worship of ancestors
                            became a dominant form of religion. The absence of the
                            true gods was not nearly as difficult for some nomads
                            to accept, as many tribes had always maintained religious
                            rituals and ceremonies that honored all the spirits.
                        </p>
                        <p>Though every tribe differs, most nomads harbor a
                            deeply ingrained distrust of other races, including city-
                            dwelling humans and other nomads. Even in the best of
                            times, relations between nomadic tribes and outsiders are
                            strained. However, despite their generalizations of other
                            races, nomads tend to give individual members a chance to
                            prove themselves worthy of respect. Once respect is won,
                            outsiders usually discover that no one is a more steadfast
                            ally than a nomad.
                        </p>
                        <section className={"card p-3"}>
                            <h5>Plainsfolk</h5>
                            <ul>
                                <li>Speed: 6</li>
                                <li>Can be a mage</li>
                                <li>Ability: <i>Nomad</i>: WP -. You are used to sleeping
                                    under any circumstance; you can take a Long Rest anywhere.
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>
            </section>
            break;
        case "Dwarves":
            returnable = <section id={"dwarf"}>
                <h3>Hill Dwarves</h3>
                <section>
                    <h5>Introduction</h5>
                    <p>To the other races of Ansalon, when referring to a dwarf,
                        the dwarf in question is mostly likely of the Neidar clan.
                        The term Neidar was first coined in Thorbardin to describe
                        a clan of dwarves who dwelt above ground. Since that time,
                        the term has been used to refer to nearly all dwarves who
                        prefer to live on the surface of Krynn rather than beneath
                        it. They are the most well known of all dwarves, because
                        they interact with the outside world more than their
                        mountain dwelling brethren. Known to most races simply
                        as hill dwarves, the Neidar are sturdy fighters, shrewd
                        merchants, and master craftsmen.
                    </p>
                    <p>More curious about the world around them than their
                        mountain-dwelling cousins, hill dwarves have traveled far
                        and wide, spreading their culture and plying their trade
                        in every nation of Ansalon. Nearly every mountain in
                        Ansalon has a settlement of hill dwarves somewhere along
                        its base. Dwarven adventurers will most often be Neidar,
                        as they are usually the only dwarves willing to leave their
                        homes in search of greater fortune. In their dealings,
                        Neidar tend to be fair and honest, but will haggle for
                        every last copper. Hill dwarves are loyal friends if one can
                        penetrate their grumbling manners and gruff
                        exterior.
                    </p>
                    <p>The dwarves of Krynn, in general, are among the
                        most industrious and resilient races of Ansalon. Unwilling
                        to give up in the face of adversity and raised in a culture
                        steeped in tradition, the dwarves of Ansalon appear to the
                        outside world to have remained as tough and solid as their
                        mountain homes. Most ancient buildings still standing
                        thousands of years after their construction are products
                        of skilled dwarven craftsmanship. The dwarves' patience,
                        hard work, and passion for their craft are evident in their
                        monumental accomplishments.
                    </p>
                    <p>From the outside, it often appears the dwarven race
                        is one of solidarity; it is evident to every dwarf that life
                        among the separate clans is quite the opposite. When
                        confronted with a common enemy, the dwarven clans can
                        pull together and create a formidable front. Yet, when left
                        to their own devices, they often find themselves at odds
                        with one another. Past transgressions are not forgotten
                        or easily forgiven, and this stubborn refusal to let go of
                        the past can cause fissures in the solid veneer of dwarven
                        society. While dwarves have faced the threats of war
                        against other races, it has always been the threat of civil
                        unrest that has been the most dangerous.
                    </p>
                    <p>There are several different dwarven clans scattered across
                        Ansalon; however, all dwarves share a set of common
                        traits, which place them apart from other races. Most folk
                        would agree that, in general, dwarves seem to be dour
                        and grumpy. They can be amiable enough when making a
                        deal and coins are exchanging hands, or when they have
                        drunk enough dwarven spirits, but on the whole, they
                        usually appear agitated with the world. Close friends and
                        family know this is an act. The complaining and boisterous
                        bluster is a dwarf's natural defense against unwanted
                        contact. It's often difficult to gain a close friendship with
                        a dwarf, but those who have discover that the bond of
                        friendship is stronger than steel.
                    </p>
                    <p>Dwarves are a passionate people. Every dwarf and clan
                        expresses this in a different way, but it is an underlying
                        current in the nature of all dwarves. Whether it is a passion
                        for life, a passion for their profession, or a passion for
                        power, every dwarf has something or someone to which
                        they are devoted. They invest their entire life and being
                        into this enterprise, which makes the wrath incurred from
                        a personal loss truly frightening.
                    </p>
                </section>
                <section>
                    <h5>Physical Appearance</h5>
                    <p>Hill dwarves tend to be short and stocky. They stand
                        between 4 and 4 ½ feet tall. While not tall, their girth
                        still makes them physically imposing. Male hill dwarves
                        tend to weigh anywhere between 150 and 200 pounds;
                        females usually weigh slightly less. They have a dense bone
                        structure that lends to this added weight and makes them
                        less buoyant than other creatures. As such, dwarves sink,
                        rather than float, in deep waters. Of course, this only adds
                        to their natural aversion of large bodies of water.
                    </p>
                    <p>The Neidar often have darkly tanned skin from
                        years spent outdoors working fields, harvesting lumber,
                        and traveling to and from nearby settlements for trade.
                        Wrinkles are common, beginning around the early age of
                        forty, making hill dwarves appear older than they truly are.
                    </p>
                    <p>Neidar eye colors are predominantly dark brown with the
                        occassional exception of green or hazel. Many hill
                        dwarves tend to be nearsighted. Their heavy eyebrows
                        hang over their eyes, giving them a natural scowl when
                        tired or preoccupied. This is a large reason why non-dwarves
                        believe they are always cross.
                    </p>
                    <p>A dwarf's hair is a source of pride and occasionally a sign
                        of their social status. Dwarven males love their facial hair.
                        “You can tell a lot about a dwarf by the way he keeps his beard,”
                        is a common dwarven saying. It is common practice for
                        a dwarf to keep his beard tucked into his belt, provided
                        it's long enough; this way, the beard stays out of the
                        way while he are working. Beards are occassionally
                        braided and tied. While this is functional, additional
                        ornamentation is considered gaudy for males. Keeping a
                        beard clean and healthy is the general accepted practice.
                    </p>
                    <p>Hair color ranges from family to family. As a rule, hill
                        dwarves have the widest spectrum of hair color, ranging
                        from blonde to black and everything in between. Their
                        hair will begin to turn a silver-grey as they reach
                        adulthood and white as they reach old age. Many male
                        hill dwarves tend to go bald while they are still
                        young. Females, however, often enjoy thick heads of hair
                        their whole life. They take as much pride in their hair
                        as their men. While they do not have beards, they do
                        have long hair, often tied up in a bun to keep it out
                        of the way when performing the day-to-day tasks; they
                        let down it at night and for special occasions.
                        Ornamental hairnets, jeweled pins, and fashionable hair
                        clips are brought out during festivals or community
                        get-togethers.
                    </p>
                </section>
                <section>
                    <h5>Psychology</h5>
                    <p>Hill Dwarves believe in hard work and commitment. A good
                        life is comprised of a day of hard labor followed by a
                        mug of spirits and the satisfaction that you have done
                        something worthwhile for your family and community.
                        Creature comforts are important once work is complete.
                        “A good chair can outlast a good friend!” is an old
                        dwarven saying. Though many more hill dwarves than
                        mountain dwarves are adventurers, the majority prefer
                        to remain dedicated to their family and community.
                        Dwellings are often adorned with trappings to make the
                        house more comfortable. While all dwarves covet gems and
                        precious metals, hill dwarves do not usually feel a need
                        to flaunt their wealth.
                    </p>
                    <p>Like all dwarves, if an individual can establish a bond
                        with a hill dwarf, that person can always depend on them.
                        Rock solid and never wavering, a Neidar will defend his
                        friends and family to the death. Their stubborn nature,
                        which keeps them from returning to the mountains or
                        forgetting any slight against them, can be a powerful force
                        when it is used to protect a loved one.
                    </p>
                </section>
                <section className={"card p-3"}>
                    <h5>Hill Dwarf</h5>
                    <ul>
                        <li>Speed: 4</li>
                        <li>Cannot be a mage</li>
                        <li>Ability: <i>Resilient</i>: WP 3. Natural resilience
                            helps dwarves overcome many hardships. Activating this
                            ability grants a Boon to your CON roll vs poison or
                            disease, or to make yourself Comfortable when resting.
                        </li>
                    </ul>
                </section>
            </section>
            break;
        case "Kender":
            returnable = <section id={"kender"}>
                <h3>Kender</h3>
                <section>
                    <h5>Introduction</h5>
                    <p>Kender are the children of the Krynn. They are an
                        adventure-loving, curious, spontaneous race that embodies
                        the youthfulness and lust for life many adventurers share.
                        Their closest relation on other worlds would be halflings,
                        but even halflings cannot compare to a kender's curiosity,
                        fearlessness, or knack for finding trouble.
                    </p>
                    <p>Almost every kender encountered is in the thrall of
                        wanderlust, an affliction striking kender hard during their
                        late teen and early adult years. Wanderlust causes kender
                        to pick-up and travel the world far and wide in search of
                        one exciting adventure after another. They roam aimlessly
                        and are not known for following orders, unless they believe
                        they came up with the idea themselves or are interested
                        enough in what might happen if they followed that order.
                    </p>
                    <p>Every race on Krynn has encountered the kender. A
                        kender's curiosity and fearlessness take them to places
                        no sane being would think to go. This includes pockets,
                        private homes, and locked chests. However, the majority
                        of kender are appalled at the thought of stealing. Most true
                        kender do not steal; they handle. Handling is simply the
                        act of picking up an item and examining it out of curiosity.
                        They are often so involved with examining the item that
                        they wander away and forget to return it. To a kender, this
                        makes perfect sense, but to other races, it's just another
                        word for stealing.
                    </p>
                </section>
                <section>
                    <h5>Physical Appearance</h5>
                    <p>Kender typically stand no more than 3 to 4 feet tall, with
                        the males usually being taller than the females. They
                        weigh between 80 and 100 pounds. Adult kender are well
                        muscled, despite being thin and light of build. Kender
                        are sometimes mistaken for young humans, but closer
                        inspection reveals the pointed ears, face wrinkles, and
                        many pouches indicative of kender. Kender find their
                        face wrinkles, also called crow's feet or laugh-lines, highly
                        attractive.
                    </p>
                    <p>Kender hair color ranges from light blond to deep
                        brown to black with a few sporting red-orange hues. Most
                        kender wear their hair long. The most common hairstyle
                        is the topknot. It's also common among kender nobility to
                        braid their sideburns as a sign of their status.
                    </p>
                    <p>Kender typically favor bright colors and gaudy apparel
                        that is at the same time rugged and rustic. Most kender
                        add accents to their clothing and weapons by tagging
                        them with ribbons, feathers, beads, or colorful scarves. All
                        kender-made clothing, regardless of what it is, has pockets
                        and lots of them. The staple of all kender outfits, however,
                        is the many pouches. It is rare to see a kender with less
                        than two pouches, though they usually have many more
                        than that.
                    </p>
                </section>
                <section>
                    <h5>Psychology</h5>
                    <p>An old kender proverb goes: “If you find an open door, go
                        inside, and if you find a locked door, open it.” Kender are
                        born with the heart of an explorer and an intense curiosity
                        that cannot be denied. This leads them to explore every
                        nook and cranny, check behind every door, and snoop in
                        every pocket. Over time, a kender can learn to understand
                        the need for caution in some situations, such as when their
                        friends may be hurt as a direct result of their actions.
                    </p>
                    <p>Kender are attracted to magic and gadgets like dwarves
                        to ale. Kender are in awe of anything magical; items, spells,
                        and creatures pique a kender's interest, and they can often
                        be found wandering around places rumored to be magical.
                    </p>
                    <p>Due to their intense curiosity, kender are highly resistant
                        to fear, magical or otherwise. In the face of the most
                        intense fear, most kender have stated that they have felt
                        an odd fluttering in their stomach, similar to getting a
                        bad case of indigestion. This is usually enough to let
                        the kender know they are in a perilous situation. This
                        does not mean that kender are entirely reckless and without
                        a sense of self-preservation, however. The only thing
                        a kender usually fears is the loss of a close friend.
                    </p>
                    <p>Kender are fiercely independent. This independence,
                        coupled with their fearlessness and irrepressibility, often
                        gets the kender and his companions into trouble. “I know
                        you told me not to open the door with the magical writing
                        on it, but it had such an interesting lock, much like the
                        one my Uncle Lefty had the accident with, and it was
                        much closer than that other ordinary looking door. Sorry
                        about the whole banshee thing, but I think it'll be morning
                        soon and we'll be able to crawl out any time now.” The
                        most feared statement any fellow traveler can hear from a
                        kender companion is “Oops!”
                    </p>
                    <p>Kender have a unique concept of personal property. If
                        they see something not being used, they will pick it up and
                        take it with every intention of giving it back to the owner
                        when they are done using it or looking at it. It's really not
                        their fault they forget to give it back. Naturally, most others
                        term this as thieving, but kender see it as simple handling
                        and are simply curious about the world around them.
                        This absentminded approach to others' personal
                        property can make the owner view a kender as a liar when
                        he is caught in the act. In most situations, the kender will
                        automatically have an excuse ready:
                    </p>
                    <ul>
                        <li>"You left it, so I didn't think you wanted it anymore."</li>
                        <li>"I was just holding it for you."</li>
                        <li>"I was gonna give it back, but you wandered off somewhere."</li>
                        <li>"It must be magical, because it just appeared in my pouch!"</li>
                        <li>"Someone was going to steal it, so I'm holding it for safekeeping."</li>
                        <li>"Just because I have it, and you didn't know that I took it, doesn't mean I stole it."</li>
                    </ul>
                    <p>
                        Even more frustrating for the owner, the kender is
                        totally sincere and truly believes what they have just said.
                        Kender do not always realize what they are doing might be
                        wrong.
                    </p>
                </section>
                <section>
                    <h5>Names</h5>
                    <p>Tradition dictates kender parents select a name for their
                        child around the moment of birth. The child's first name
                        can be based off any combination of factors. The most
                        common method is to name the child after an existing
                        relative; Kipper, Kronin, Tavin, Rufus, or Meridon are a
                        few. Occasionally, parents name the kender after an event
                        in a recent adventure, such as Triplever, Mudskipper,
                        or Thistleprick, or after common kender objects like
                        Lockpick, Toolkit, and Topknot. There are countless other
                        variations of kender first names.
                    </p>
                    <p>Each kender takes their parent's last name. There
                        are specific family names, which have survived the ages;
                        Metwinger, Thistleknott, Thistleswitch, and Burrfoot are
                        some examples, but it is common practice for kender to
                        adopt a more descriptive name later on in life after their
                        adventures, such as Springheel, Lightfingers, Pakslinger,
                        or Lampwick. Usually during their wanderlust, they leave
                        home to make a name for themselves, literally. Some
                        also decide that they want to be like famous kender who
                        came before them, and take on that kender's name. This
                        happened in the decades following the War of the Lance
                        when a large number of kender took the name Tasslehoff
                        Burrfoot.
                    </p>
                </section>
                <section className={"card p-3"}>
                    <h5>Kender</h5>
                    <ul>
                        <li>Speed: 4</li>
                        <li>Cannot be a mage</li>
                        <li>Ability: <i>Fearless</i>: WP 2. You may activate
                            ability to automatically succeed at a roll to resist Fear.
                        </li>
                    </ul>
                </section>
            </section>
            break;
        case "Half-Elves":
            returnable = <section id={"half-elf"}>
                <h3>Half-Elves</h3>
                <section>
                    <h5>Introduction</h5>
                    <p>Interactions between elves and humans have rarely been
                        happy. From the earliest days after humans and elves
                        awoke on Ansalon, long before the time of Silvanos,
                        humans and elves have clashed. Tragically, these conflicts
                        have sometimes involved the horrific crime of rape;
                        it is used as a weapon to demoralize and demean the
                        enemy populace, other times soldiers having their way
                        with the locals is simply seen as part of the spoils of
                        victory. In either case, in some occasions, a child is born
                        some months later. In these violent cases, the mother is
                        most often, but not always, the elven half of the child's
                        parentage.
                    </p>
                    <p>Rarer, but not unprecedented, is the union of elf and
                        human based on love rather than force. The elves have
                        strong taboos against mixing bloodlines, and most human
                        communities aren't much more tolerant; thus, many such
                        relationships are kept secret even if the relationship is a
                        committed marriage rather than a brief affair.
                    </p>
                </section>
                <section>
                    <h5>Physical Appearance</h5>
                    <p>Half-elves may inherit some of the best and worst
                        features of each of their parents. Somewhat taller and
                        more muscular than their elven parent, they lack much
                        of grace and beauty of pure elves. Half-elves are usually
                        distinguishable from humans by their pointed ears and
                        somewhat almond-shaped eyes, but these are not enough
                        to allow a half-elf to easily blend with elven society. Any
                        differences existing between half-elves of Silvanesti or
                        Qualinesti heritage is debatable and extend only to cultural
                        trappings acquired while growing up. On the other hand,
                        half-elves of sea elf descent are often very distinct, and
                        while they do not have the aquatic traits of their sea elf
                        parent, they retain much of the skin tone and broad upper
                        body that characterizes the Dargonesti and Dimernesti.
                    </p>
                </section>
                <section>
                    <h5>Psychology</h5>
                    <p>Although the stereotype for half-elves is to be conflicted
                        and deal with a lifetime of inner turmoil, this is very
                        often truly the case. It is more common among half-elves
                        raised as elves; they see the world as if it were in slow
                        motion, with the elves in their family taking their time to
                        do anything. Half-elves in human settlements find that
                        humanity lives life for the now, makes important decisions
                        on the spur of the moment, and is otherwise a race of
                        reckless spontaneity. This may or may not be true, but it
                        is difficult for a half-elf to reconcile this with their
                        internal clock.
                    </p>
                    <p>Half-elves often take the role of the diplomat in
                        any group of which they may be a part. A half-elf is
                        continuously attempting to reconcile their human and
                        elven halves, and as such, he can often see a situation from
                        multiple points of view. However, this dichotomy can
                        also cause a half-elf to be indecisive and hesitant in any
                        dealings with more than one race.
                    </p>
                </section>
                <section className={"card p-3"}>
                    <h5>Half-Elf</h5>
                    <ul>
                        <li>Speed: 6</li>
                        <li>Can be a mage</li>
                        <li>Ability: <i>Adaptive</i>: WP 3. When rolling for
                            a skill, you can choose to make the roll using
                            another skill of your choice. However, you must be
                            able to justify how you use the selected skill
                            instead of the normal one. The GM has the final
                            say.
                        </li>
                    </ul>
                </section>
            </section>
            break;
        case "Elves":
            returnable = <section id={"elf"}>
                <h3>Elves</h3>
                <p>The elves of Ansalon, with lifetimes measured in centuries,
                    have long witnessed the destruction and rebirth of the
                    lands around them. Even they were appalled by the
                    devastation caused by the Cataclysm. The loss of the
                    gods has been especially demoralizing and marked
                    the beginning of a downward spiral in elven society.
                    Elves place full blame for the Cataclysm on the human
                    Kingpriest and his foolish actions, even though they
                    supported his crusade for good. The elves turned their
                    backs on humanity and isolated themselves.
                </p>
                <p>The elves harbor deep resentment toward the rest
                    of the world for the loss of their beloved gods. They live
                    apart, trying to avoid the famine, disease, and banditry
                    that still occasionally invade their sylvan sanctuaries. The
                    elves have reinforced their borders against human, goblin,
                    and ogre raiders. They remember the gods of old, but no
                    longer worship them, angered that the divine forces of
                    good would abandon their chosen people.
                </p>
                <section className={"card p-3"}>
                    <h5>Qualinesti Elves</h5>
                    <p>The elves of Qualinesti struggled to survive during the
                        tumultuous first years after the Cataclysm, battling hordes
                        of rampaging goblin tribes that penetrated Abanasinia
                        and human mercenary raiders who were convinced that
                        the elves were hiding great riches within the forest. The
                        Qualinesti worked tirelessly to preserve their way of life,
                        and in many ways they succeeded-though spiritually
                        they were empty, bereft of the gods of good who had once
                        watched over them.
                    </p>
                    <p>The situation grew worse. Human warlords invaded
                        the region and tested the resolve of the Qualinesti nation.
                        Bloody clashes increased the hostility between the races.
                        Yet the Qualinesti borders remained intact. The human
                        marauders settled in the north and south of the elven
                        nation. The Kharolis Mountains that border the elven
                        lands on the west prevented any invasion through the
                        territory of the hill dwarves. Thus the elves' isolation grew
                        over the centuries until an elf was rarely seen outside their
                        own lands.
                    </p>
                    <div>
                        <strong>Qualinesti Elf</strong>
                        <ul>
                            <li>Speed: 6</li>
                            <li>Can be a mage</li>
                            <li>Ability: <i>Inner Peace</i>: WP -. Elves meditate deeply
                                when they rest. You gain the benefits of a Long Rest in one
                                Shift instead of two. However, you cannot be woken during your
                                meditation.
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
            break;
        default:
            console.log("SWITCH DEFAULT")
    }
    return (
        <section className={"container mb-5 lh-lg"}>
            {returnable}
        </section>
    )
};