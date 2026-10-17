<!--
Format. A "# Topic" line starts a topic; the lines after it, up to the first "## ...", are the
topic's story (read, not quizzed). A "## Title" line starts an entry, which can be one paper or a
series. Inside an entry, a line beginning with one of these labels starts a slot:

  Papers:      list of citations, one "- " line each
  Question:    what the paper asks
  Setting:     primitives, in a line or two
  Result:      the statement, with the quantifiers
  Work:        what does the work (the assumption or structure the result hinges on)
  Proof:       the proof idea
  Matters:     why it matters, what it changed
  Connections: "- " lines; [[Entry title]] links to another entry
  Notes:       anything else
  Years:       optional; the year or span shown in the topic list (default: the first paper's year)

Slots end at the next label or the next heading. Blank lines separate paragraphs, "- " lines make
lists, *text* is italic, $...$ and $$...$$ are LaTeX (KaTeX). Entries are shown in file order.
-->

# General equilibrium

Walras wrote the system down and counted equations; the twentieth-century program made it rigorous and then found its limits. Existence (Arrow–Debreu and McKenzie, 1954) settled that the equations are consistent, by restating equilibrium as a fixed point. Radner (1972) recast equilibrium for markets that reopen over time and across states, with correct price expectations in place of a complete set of contingent claims, which is where incomplete markets begin. On dynamics, the Walrasian tâtonnement converges under gross substitutes (Arrow–Hurwicz 1958, Arrow–Block–Hurwicz 1959); Scarf (1960) showed prices cycling forever in a three-good economy; and Sonnenschein, Mantel and Debreu (1972–74) showed why no general stability or uniqueness theorem was ever possible, since individual rationality puts nothing on aggregate excess demand beyond continuity, homogeneity and Walras' law.

## Existence of competitive equilibrium

Papers:
- Arrow, K. J. and G. Debreu (1954), "Existence of an Equilibrium for a Competitive Economy," *Econometrica* 22(3), 265–290.
- McKenzie, L. W. (1954), "On Equilibrium in Graham's Model of World Trade and Other Competitive Systems," *Econometrica* 22(2), 147–161. Independent, same volume.
- McKenzie, L. W. (1959), "On the Existence of General Equilibrium for a Competitive Market," *Econometrica* 27(1), 54–71. Irreducibility in place of the survival assumption.
- Debreu, G. (1952), "A Social Equilibrium Existence Theorem," *PNAS* 38(10), 886–893. The fixed-point tool.
- Debreu, G. (1959), *Theory of Value*, ch. 5. The textbook form; ch. 7 adds time and uncertainty through contingent commodities.

Question: Walras counted equations and unknowns. Is there actually a price vector at which every consumer and every firm optimizes and all markets clear at once?

Setting: $L$ goods. Consumers $i=1,\dots,I$ with consumption sets $X_i\subset\mathbb{R}^L$, preferences $\succsim_i$, endowments $\omega_i$ and shares $\theta_{ij}$ of firms $j=1,\dots,J$ with production sets $Y_j\subset\mathbb{R}^L$. A competitive equilibrium is $(p,(x_i),(y_j))$ with $p\ne 0$ such that each $y_j$ maximizes $p\cdot y$ on $Y_j$, each $x_i$ is $\succsim_i$-maximal in the budget set $\{x\in X_i: p\cdot x\le p\cdot\omega_i+\sum_j\theta_{ij}\,p\cdot y_j\}$, and $\sum_i x_i\le\sum_i\omega_i+\sum_j y_j$ with $p_l=0$ for any good in excess supply.

Arrow–Debreu assumptions. $X_i$ closed, convex, bounded below. $\succsim_i$ complete, transitive, continuous, nonsatiated, and convex in the form $x'\succ_i x$ implies $tx'+(1-t)x\succ_i x$ for $t\in(0,1)$. $Y_j$ closed, convex, $0\in Y_j$; the aggregate $Y=\sum_j Y_j$ satisfies $Y\cap\mathbb{R}^L_+=\{0\}$ (no free lunch), $Y\cap(-Y)=\{0\}$ (irreversibility) and $-\mathbb{R}^L_+\subset Y$ (free disposal). A survival condition giving every consumer positive wealth at every price: $\omega_i$ in the interior of $X_i$, or each consumer can supply a kind of labor that is always demanded. McKenzie (1959) replaces survival by irreducibility of the economy.

Result: Under these assumptions a competitive equilibrium exists.

Work: Two things. Convexity of preferences and of technology makes the best-response correspondences convex valued, which is what a Kakutani argument needs; drop it and only approximate or large-economy versions survive (Starr 1969, Aumann 1966). The survival condition makes the budget correspondence continuous at prices where some consumer's wealth would otherwise reach zero; this is the delicate step and the one McKenzie's irreducibility is designed to weaken. Closedness, boundedness below, no free lunch and irreversibility are bookkeeping for compactness.

Proof: Arrow–Debreu's route. (1) No free lunch and irreversibility bound the set of feasible allocations; truncate each $X_i$ and $Y_j$ to a cube containing it. (2) Form an abstract economy, a game in which each player's feasible set depends on the others' choices: consumers choose $x_i$ in the truncated budget set, firms choose $y_j$ to maximize profit, and a fictitious price player chooses $p$ in the simplex to maximize the value of excess demand $p\cdot(\sum_i x_i-\sum_i\omega_i-\sum_j y_j)$. (3) Survival gives continuity of the budget correspondence, convexity gives convex-valued best responses, and Debreu's (1952) social equilibrium theorem, which is Kakutani applied to the product of the best-response correspondences, gives a fixed point. (4) At the fixed point budgets bind by nonsatiation, so Walras' law holds; combined with the price player's maximization this forces excess demand $\le 0$ in every good, with $p_l=0$ where it is strict. (5) The chosen points lie inside the cube, so the truncation does not bind.

Debreu's (1959) route. Define the aggregate excess demand correspondence $z(p)$ on the price simplex; show it is nonempty, convex and compact valued, upper hemicontinuous, bounded below, with $p\cdot z\le 0$ for every $z\in z(p)$; then apply the Gale–Nikaido–Debreu lemma: such a $z$ has a $p^*$ with $z(p^*)\cap(-\mathbb{R}^L_+)\ne\emptyset$. The lemma is itself Kakutani applied to $z$ paired with the price player.

Matters: It established that the Walrasian system is consistent under general conditions, which Wald (1936) had shown only in special cases. More durably it fixed the method, equilibrium as a fixed point of a best-response map (borrowed from Nash 1950), and the model, the Arrow–Debreu economy, which absorbs time and uncertainty through contingent commodities at no extra cost. It also makes clear what existence does not deliver: nothing on uniqueness, stability or comparative statics, which is where the rest of this topic goes.

Connections:
- [[Radner equilibrium]] is the existence question again once contingent-claims markets are replaced by sequential spot and asset markets.
- [[Tâtonnement and stability]] and [[Scarf cycles]] ask whether the equilibrium whose existence is proved here is reached by price adjustment.
- [[Sonnenschein–Mantel–Debreu]] shows that the properties of excess demand used here are essentially all it has.
- Nash (1950) is the methodological source; Debreu (1952) generalizes Nash to abstract economies.
- Mas-Colell (1974) and Shafer–Sonnenschein (1975) drop completeness and transitivity; Aumann (1966) drops convexity with a continuum of agents; Starr (1969) bounds the error from nonconvexity in large finite economies.
- Scarf (1973) turned the fixed-point argument into an algorithm for computing equilibria.

## Radner equilibrium

Papers:
- Radner, R. (1972), "Existence of Equilibrium of Plans, Prices, and Price Expectations in a Sequence of Markets," *Econometrica* 40(2), 289–303.
- Arrow, K. J. (1953, English 1964), "The Role of Securities in the Optimal Allocation of Risk-bearing," *Review of Economic Studies* 31(2), 91–96. The insight the model formalizes.
- Radner, R. (1968), "Competitive Equilibrium under Uncertainty," *Econometrica* 36(1), 31–58. Arrow–Debreu with differential information, and why a once-and-for-all market is the wrong model.
- Hart, O. (1975), "On the Optimality of Equilibrium when the Market Structure is Incomplete," *Journal of Economic Theory* 11(3), 418–443. What goes wrong without Radner's bound.

Question: When markets reopen over time and across states, and agents trade a limited set of assets rather than a complete set of date-event contingent claims at the start, what is the equilibrium concept, and does it exist?

Setting: Two dates. At date 1 one of $S$ states occurs. $L$ spot goods at date 0 and in each state, with spot prices $p_0$ and $p_s$. $J$ assets traded at date 0 at prices $q\in\mathbb{R}^J$; asset $j$ delivers the bundle $a_{js}\in\mathbb{R}^L$ in state $s$ (Radner's contracts for future delivery of goods are real assets). Consumer $i$ with endowments $(\omega_{i0},(\omega_{is})_s)$ chooses a plan, consumption $x_{i0}$ and $(x_{is})_s$ and a portfolio $\theta_i\in\mathbb{R}^J$, to maximize $u_i(x_{i0},x_{i1},\dots,x_{iS})$ subject to a budget constraint at every date-event:
$$p_0\cdot x_{i0}+q\cdot\theta_i\le p_0\cdot\omega_{i0},\qquad p_s\cdot x_{is}\le p_s\cdot\omega_{is}+\sum_j\theta_{ij}\,p_s\cdot a_{js}\ \text{ for each } s.$$
The date-1 prices in the constraints are the consumer's expectations.

An equilibrium of plans, prices and price expectations is $(q,p_0,(p_s)_s,(x_i,\theta_i)_i)$ such that every plan is optimal at these prices, all consumers hold the same expectations $(p_s)_s$, and the expectations are correct: $\sum_i\theta_i=0$, $\sum_i x_{i0}=\sum_i\omega_{i0}$, and $\sum_i x_{is}=\sum_i\omega_{is}$ for every $s$. The anticipated spot prices are the ones that clear the spot markets in each state.

Result: Under standard assumptions on preferences and endowments, together with an a priori bound on each consumer's position in every asset, an equilibrium of plans, prices and price expectations exists. When the assets span all states, meaning the $S\times J$ matrix of payoff values $[\,p_s\cdot a_{js}\,]$ has rank $S$, the equilibrium allocations are exactly the Arrow–Debreu allocations of the contingent-claims economy. With fewer independent assets they generally are not, and are generically not even constrained Pareto efficient (Hart 1975; Geanakoplos–Polemarchakis 1986).

Work: Correct common expectations. They close the model: once every agent anticipates the same spot prices and those are the prices that will clear the spot markets, the sequence of markets is a single simultaneous system to which fixed-point methods apply. The second thing is the bound on asset positions, and it is not cosmetic. Hart (1975) showed that with real assets the set of state-contingent transfers a portfolio can achieve depends on spot prices and can drop rank at some price vectors, so the budget correspondence is discontinuous there and without the bound equilibrium can fail to exist.

Proof: With bounded positions each consumer's choice set is compact and the budget correspondence is continuous in all prices (asset prices, date-0 spot prices and the spot prices of every state), so demand is upper hemicontinuous and convex valued. Treat the asset market and each date-event spot market as a market with its own price player and apply the abstract-economy fixed-point argument of [[Existence of competitive equilibrium]]. A fixed point clears every market at plans that are optimal under the common expectations, which is the definition. The step that fails without the bound is continuity of the budget correspondence, for the rank reason above; Duffie and Shafer (1985) later recovered existence for generic endowments and payoffs by treating the asset span, a point of a Grassmannian, as the equilibrium variable.

Matters: It is the equilibrium concept for sequential trade under uncertainty, so it is the foundation of general equilibrium with incomplete markets and of general-equilibrium asset pricing. It makes precise Arrow's (1953) observation that $S$ securities plus spot markets reproduce the full Arrow–Debreu outcome with far fewer markets. And it locates where the welfare theorems stop: with incomplete markets equilibrium exists but is not efficient, not even in the constrained sense, and opening a new market can make everyone worse off (Hart 1975).

Connections:
- [[Existence of competitive equilibrium]] supplies the fixed-point machinery and the contingent-commodity benchmark (Debreu 1959, ch. 7).
- [[Arrow–Debreu contingent claims]] (Arrow 1953) is the complete-markets special case; Radner (1968) is the differential-information extension of Arrow–Debreu that shows why sequential markets are needed.
- Hart (1975): nonexistence without the bound, and Pareto-ranked equilibria.
- Duffie–Shafer (1985): generic existence for GEI. Cass (1984): existence with nominal assets, whose span does not depend on prices.
- Geanakoplos–Polemarchakis (1986): generic constrained suboptimality.
- Radner (1979): rational expectations equilibrium, where prices also carry information.
- Magill–Quinzii (1996), *Theory of Incomplete Markets*, is the book.

## Tâtonnement and stability

Years: 1941–59

Papers:
- Samuelson, P. A. (1941), "The Stability of Equilibrium: Comparative Statics and Dynamics," *Econometrica* 9(2), 97–120. The dynamic formulation and the correspondence principle.
- Arrow, K. J. and L. Hurwicz (1958), "On the Stability of the Competitive Equilibrium, I," *Econometrica* 26(4), 522–552.
- Arrow, K. J., H. D. Block and L. Hurwicz (1959), "On the Stability of the Competitive Equilibrium, II," *Econometrica* 27(1), 82–109.
- Hahn, F. (1958), "Gross Substitutes and the Dynamic Stability of General Equilibrium," *Econometrica* 26(1), 169–170; Negishi, T. (1958), "A Note on the Stability of an Economy where All Goods are Gross Substitutes," *Econometrica* 26(3), 445–447.
- Negishi, T. (1962), "The Stability of a Competitive Economy: A Survey Article," *Econometrica* 30(4), 635–669.

Question: Does the Walrasian auctioneer's rule, raise the price of a good in excess demand and lower it in excess supply with no trade until equilibrium, lead to equilibrium, and under what conditions on the economy?

Setting: Exchange economy with aggregate excess demand $z:\mathbb{R}^L_{++}\to\mathbb{R}^L$, continuous, homogeneous of degree zero, satisfying Walras' law $p\cdot z(p)=0$. Tâtonnement: $\dot p_l=k_l\,z_l(p)$ with speeds $k_l>0$; Samuelson's general form is $\dot p_l=H_l(z_l(p))$ with $H_l$ sign preserving. Equilibrium: $z(p^*)=0$. Local stability: paths starting near the equilibrium ray converge to it. Global stability: paths from every $p(0)\gg 0$ converge to an equilibrium. Gross substitutes: $\partial z_l/\partial p_k>0$ for all $k\ne l$, which with homogeneity gives $\partial z_l/\partial p_l<0$.

Result: Across the two Arrow–Hurwicz papers. If every good is a gross substitute for every other, the equilibrium is unique up to scale and the tâtonnement is globally stable: from any $p(0)\gg 0$ the path converges to the equilibrium ray. The general principle behind it is that global stability holds whenever $p^*\cdot z(p)>0$ for every non-equilibrium $p$, the weak axiom holding for aggregate excess demand against the equilibrium price; diagonal dominance of the Jacobian is another sufficient condition. Local stability under gross substitutes and stability with two goods are the earlier, easier cases.

Work: Gross substitutes. It restricts income effects enough that aggregate excess demand behaves like one consumer's: the good whose price is highest relative to $p^*$ is in excess supply and the lowest in excess demand, so the spread of relative prices shrinks. The weak-axiom condition $p^*\cdot z(p)>0$ is the general form of the same thing. Doing quieter work is the fiction of no trade out of equilibrium, which is what keeps $z$ a fixed function of $p$ along the path.

Proof: Two arguments. (a) Lyapunov. Walras' law makes $\sum_l p_l^2/k_l$ constant along $\dot p_l=k_l z_l(p)$; let $p^*$ be the equilibrium on the ray with the same value of it and set $V(p)=\sum_l(p_l-p^*_l)^2/k_l$. Then $\dot V=2\sum_l(p_l-p^*_l)z_l(p)=2\,[p\cdot z(p)-p^*\cdot z(p)]=-2\,p^*\cdot z(p)<0$ off equilibrium, so $p(t)\to p^*$. (b) Ratio spread under gross substitutes. Let good $k$ attain $\max_l p_l/p^*_l$ and scale $p^*$ so that $p_k=p^*_k$ and $p_l\le p^*_l$ for all $l$. Moving from $p^*$ to $p$ lowers the other prices, so by gross substitutes $z_k(p)\le z_k(p^*)=0$: the good with the highest relative price is in excess supply and $\max_l p_l/p^*_l$ is nonincreasing along the path; symmetrically $\min_l p_l/p^*_l$ is nondecreasing. With strict gross substitutes the spread falls strictly until it is zero, which is convergence to the ray, and the same step with $p$ and $p^*$ both equilibria gives uniqueness. (c) The bridge: under gross substitutes $p^*\cdot z(p)>0$ off the ray, shown by homogeneity and moving from $p^*$ to $p$ one group of prices at a time, so (a) covers that case as well.

Matters: The first rigorous stability theory for competitive equilibrium, and the identification of gross substitutes as the benign case in which uniqueness, stability and monotone comparative statics hold together. It also exposed the limits: the process is a fiction (no trade, nobody sets prices), stability needs far more than existence does, and [[Scarf cycles]] showed the extra assumptions cannot be dropped. Saari and Simon (1978) later showed that a price mechanism that converges for every economy must use essentially all of the Jacobian of $z$, not just the sign of excess demand. Gross substitutes returns as the central condition in discrete settings, Kelso–Crawford (1982), Gul–Stacchetti (1999, 2000) and Ausubel (2006), where the tâtonnement becomes a dynamic auction.

Connections:
- Samuelson (1941, 1947): the dynamic formulation and the correspondence principle linking stability to comparative statics.
- [[Scarf cycles]]: the counterexample that bounds what can be proved.
- [[Sonnenschein–Mantel–Debreu]]: why stability cannot follow from individual rationality.
- Uzawa (1960): Walras' own tâtonnement in the theory of exchange.
- Hahn–Negishi (1962) and Fisher (1983): non-tâtonnement processes with trade out of equilibrium.
- Saari–Simon (1978): the informational impossibility result.
- [[Gross substitutes and ascending auctions]]: Kelso–Crawford (1982), Gul–Stacchetti (1999, 2000), Ausubel (2006), the same condition with indivisible goods.

## Scarf cycles

Papers:
- Scarf, H. (1960), "Some Examples of Global Instability of the Competitive Equilibrium," *International Economic Review* 1(3), 157–172.
- Hirota, M. (1981), "On the Stability of Competitive Equilibrium and the Patterns of Initial Holdings: An Example," *International Economic Review* 22(2), 461–467. Which endowment patterns give orbits and which give convergence.
- Anderson, C. M., C. R. Plott, K.-I. Shimomura and S. Granat (2004), "Global Instability in Experimental General Equilibrium: The Scarf Example," *Journal of Economic Theory* 115(2), 209–249. The economy in the laboratory.

Question: Is tâtonnement stable in general, or only under conditions like gross substitutes? Is there an economy, as well behaved as one likes, with a unique equilibrium that the auctioneer never finds?

Setting: Three goods, three consumers. Consumer $i$ owns one unit of good $i$ and wants goods $i$ and $i+1$ (indices mod 3) in fixed proportions:
$$u_1=\min\{x_1,x_2\},\quad u_2=\min\{x_2,x_3\},\quad u_3=\min\{x_3,x_1\},\qquad \omega_1=e_1,\ \omega_2=e_2,\ \omega_3=e_3.$$
Consumer 1 spends her wealth $p_1$ on equal amounts of goods 1 and 2, so her excess demand is $\big(-\tfrac{p_2}{p_1+p_2},\ \tfrac{p_1}{p_1+p_2},\ 0\big)$, and cyclically for the others. Aggregate excess demand:
$$z_1(p)=\frac{p_3}{p_1+p_3}-\frac{p_2}{p_1+p_2},\qquad z_2(p)=\frac{p_1}{p_1+p_2}-\frac{p_3}{p_2+p_3},\qquad z_3(p)=\frac{p_2}{p_2+p_3}-\frac{p_1}{p_1+p_3}.$$
Tâtonnement $\dot p_l=z_l(p)$.

Result: The unique equilibrium up to scale is $p^*=(1,1,1)$. Along every solution of $\dot p=z(p)$ both $\|p\|^2$ and $p_1p_2p_3$ are constant, so every path from a non-equilibrium $p(0)$ is a closed curve around $p^*$: prices cycle forever and never converge. Scarf gives three examples; depending on the pattern of initial holdings, prices orbit clockwise, orbit counterclockwise, or converge, and Hirota (1981) characterizes the paths.

Work: Complementarity arranged in a cycle. Each consumer sells the good she owns to buy a bundle containing the next good, so a high $p_1$ makes consumer 1 rich and bids up good 2, which enriches consumer 2 and bids up good 3, and so on around the triangle; excess demand chases the prices around rather than toward the equilibrium. Three goods are the minimum, since with two the tâtonnement moves on a line and cannot cycle. Nothing pathological is needed: preferences are continuous, convex and monotone, the economy is symmetric, and the equilibrium is unique.

Proof: Direct computation. Walras' law gives $\tfrac{d}{dt}\|p\|^2=2\,p\cdot z(p)=0$, which holds in any economy under $\dot p=z(p)$. The special fact is that $\sum_l z_l(p)/p_l=0$ identically for this economy (check it from the formulas), so $\tfrac{d}{dt}\log(p_1p_2p_3)=\sum_l\dot p_l/p_l=0$. Two independent conserved quantities in $\mathbb{R}^3$ confine each path to a closed curve, the intersection of a sphere with a surface $p_1p_2p_3=c$, which degenerates to a point only at $p^*$. Uniqueness: $z_1(p)=0$ reduces to $p_1p_3=p_1p_2$, so $p_2=p_3$, and $z_2(p)=0$ reduces to $p_1p_2=p_2p_3$, so $p_1=p_3$. With speeds $k_l$ the conserved quantities become $\sum_l p_l^2/k_l$ and $\sum_l(\log p_l)/k_l$, so the cycling is not an artifact of equal speeds.

Matters: Stability is not a property of competitive equilibrium as such. Before Scarf the hope was that the Arrow–Hurwicz results were the general case; after it, gross-substitutes-type assumptions are known to be necessary rather than convenient, and [[Sonnenschein–Mantel–Debreu]] later explained why: nothing in individual rationality excludes the aggregate excess demand of this economy, or of any other. The example is also the standard test bed for anything claiming to find equilibrium. Anderson, Plott, Shimomura and Granat (2004) ran it as a double auction in the laboratory and found average prices orbiting in the direction the model predicts.

Connections:
- [[Tâtonnement and stability]]: the positive results this example bounds.
- [[Sonnenschein–Mantel–Debreu]]: the general reason such examples cannot be excluded.
- Hirota (1981): price paths as a function of endowment patterns in the same economy.
- Anderson, Plott, Shimomura and Granat (2004): experimental confirmation of the orbits.
- Saari–Simon (1978): no price mechanism using only excess demand can be made to work in general.

## Sonnenschein–Mantel–Debreu

Years: 1972–74

Papers:
- Sonnenschein, H. (1972), "Market Excess Demand Functions," *Econometrica* 40(3), 549–563.
- Sonnenschein, H. (1973), "Do Walras' Identity and Continuity Characterize the Class of Community Excess Demand Functions?," *Journal of Economic Theory* 6(4), 345–354.
- Mantel, R. (1974), "On the Characterization of Aggregate Excess Demand," *Journal of Economic Theory* 7(3), 348–353.
- Debreu, G. (1974), "Excess Demand Functions," *Journal of Mathematical Economics* 1(1), 15–21.
- Mantel, R. (1976), "Homothetic Preferences and Community Excess Demand Functions," *Journal of Economic Theory* 12(2), 197–201.

Question: Aggregate excess demand of an exchange economy is continuous, homogeneous of degree zero and satisfies Walras' law. Does the hypothesis that it comes from utility-maximizing consumers impose anything else?

Setting: Exchange economy with $L$ goods; consumers $i$ with preferences $\succsim_i$ and endowments $\omega_i\gg 0$; aggregate excess demand $z(p)=\sum_i\big(x_i(p,\,p\cdot\omega_i)-\omega_i\big)$. Normalize prices to the unit sphere and fix $\varepsilon>0$:
$$P_\varepsilon=\{\,p\in\mathbb{R}^L_+:\ \|p\|=1,\ p_l\ge\varepsilon \text{ for all } l\,\}.$$
Individual demand satisfies the weak axiom and has a symmetric, negative semidefinite Slutsky matrix; the question is what survives summation.

Result: (Debreu 1974) Let $z:P_\varepsilon\to\mathbb{R}^L$ be any continuous function with $p\cdot z(p)=0$ for all $p$. Then there is an exchange economy with $L$ consumers, each with continuous, strictly convex, monotone preferences and a strictly positive endowment, whose aggregate excess demand coincides with $z$ on $P_\varepsilon$. Sonnenschein (1972, 1973) posed the problem and proved partial versions; Mantel (1974) proved the full statement; Debreu's version gets the number of consumers down to $L$, which is the right number, since with fewer consumers than goods there are genuine restrictions (Diewert 1977, Geanakoplos–Polemarchakis 1980). Mantel (1976): the $L$ consumers can be taken to have homothetic preferences. Kirman–Koch (1986): identical preferences and collinear endowments do not help either.

Work: Income effects that differ across consumers. Walras' law and homogeneity hold consumer by consumer and survive summation; the weak axiom and Slutsky negative semidefiniteness do not, because a price change redistributes wealth across consumers whose endowments differ in composition, and the resulting shift in demand can point anywhere. Keeping prices away from the boundary, $p_l\ge\varepsilon$, is what makes the construction go through: on a compact price set the required individual excess demands can be given positive coefficients, and then they are rationalizable.

Proof: Debreu's construction. Because $\|p\|=1$, the vectors $e_l-p_lp$ are the projections of the coordinate vectors onto the hyperplane orthogonal to $p$; they span it, and $\sum_l p_l(e_l-p_lp)=0$. By Walras' law $z(p)$ lies in that hyperplane, so for any constant $K$,
$$z(p)=\sum_l\big(z_l(p)+Kp_l\big)\,(e_l-p_lp).$$
On $P_\varepsilon$ the $z_l$ are bounded and $p_l\ge\varepsilon$, so $K$ can be chosen to make every coefficient $\beta_l(p)=z_l(p)+Kp_l$ positive. Give consumer $l$ the endowment $e_l$ and the excess demand $\beta_l(p)(e_l-p_lp)$; it satisfies Walras' law by construction and the $L$ of them sum to $z$. Debreu's lemma says any such function with a continuous positive coefficient is the excess demand of a consumer with continuous, strictly convex, monotone preferences. The geometry: the bundle $e_l+\beta(e_l-p_lp)$ is the point of the budget hyperplane nearest to $(1+\beta)e_l$ on the $l$-th axis, and a revealed-preference reversal between $p$ and $p'$ would need both $p_l\le(p\cdot p')p'_l$ and $p'_l\le(p\cdot p')p_l$, impossible since $p\cdot p'<1$ for distinct unit vectors.

Matters: The decisive negative result of the theory. Uniqueness, stability of tâtonnement and comparative statics cannot be derived from individual rationality; any continuous excess demand, hence any tâtonnement dynamics including [[Scarf cycles]], is consistent with a well-behaved economy. Restrictions must come from somewhere else: from assumptions on the distribution of preferences and endowments (Hildenbrand 1983, 1994; Grandmont 1992), or from observing more than $z$ (Brown–Matzkin 1996 show that the equilibrium manifold, which records endowments too, is testable). It is also the formal case against the representative consumer (Kirman 1992).

Connections:
- [[Existence of competitive equilibrium]]: the continuity, homogeneity and Walras' law used there turn out to be essentially everything.
- [[Tâtonnement and stability]] and [[Scarf cycles]]: SMD is the general form of Scarf's warning.
- Shafer–Sonnenschein (1982), *Handbook of Mathematical Economics* vol. 2, ch. 14: the survey.
- Diewert (1977), Geanakoplos–Polemarchakis (1980): restrictions when there are fewer consumers than goods.
- Kirman–Koch (1986): identical preferences and collinear endowments still give anything.
- Brown–Matzkin (1996): testable restrictions on the equilibrium manifold; Chiappori–Ekeland (1999) on the structure of the problem.
- Hildenbrand (1983, 1994), Grandmont (1992): restrictions from heterogeneity.
- Kirman (1992): "Whom or What Does the Representative Individual Represent?"

# Decision theory

Choice under uncertainty begins with Bernoulli (1738), who valued gambles by the expected utility of wealth with a concave utility, to dispose of the St. Petersburg paradox, but had no foundation for the utility beyond introspection. Von Neumann and Morgenstern (1944, 1947) supplied one for objective probabilities: the independence axiom makes preferences over lotteries linear in probabilities and the utility cardinal. Savage (1954) removed the objective probabilities, deriving both the probability and the utility from preferences over acts, with the sure-thing principle as the key postulate. Arrow (1953) and Debreu (1959) carried the same state space into general equilibrium, where an act is a state-contingent consumption plan and complete markets price it; that is the state-preference approach and the hinge to the general equilibrium topic. Minimax is the other pole: von Neumann's theorem, Wald's statistical decision theory, which Savage wrote against, and Gilboa and Schmeidler's (1989) maxmin expected utility, which brought the worst case back in controlled form after Ellsberg (1961) showed the sure-thing principle failing under ambiguity.

## Bernoulli's expected utility

Papers:
- Bernoulli, D. (1738), "Specimen theoriae novae de mensura sortis," *Commentarii Academiae Scientiarum Imperialis Petropolitanae* 5, 175–192. English translation by L. Sommer, "Exposition of a New Theory on the Measurement of Risk," *Econometrica* 22(1), 1954, 23–36.
- Cramer, G. (1728), letter to Nicolas Bernoulli, reproduced in the paper. Square-root utility and a utility ceiling, the first answers to the problem Nicolas Bernoulli had posed to Montmort in 1713.
- Menger, K. (1934), "Das Unsicherheitsmoment in der Wertlehre," *Zeitschrift für Nationalökonomie* 5, 459–485. Unbounded utility brings the paradox back.
- Samuelson, P. A. (1977), "St. Petersburg Paradoxes: Defanged, Dissected, and Historically Described," *Journal of Economic Literature* 15(1), 24–55. The survey.

Question: How should a risky prospect be valued, if not by its expected monetary value? A fair coin is tossed until the first head; the game pays $2^{k-1}$ ducats if that happens on toss $k$. Its expected value is infinite, and nobody would pay more than a few ducats to play.

Setting: Initial wealth $w$ and a gamble paying $x_k$ with probability $p_k$. Bernoulli proposes that a gain raises utility ("emolumentum") by an amount inversely proportional to the wealth one already has, $du=b\,dx/x$, so $u(x)=b\log(x/\alpha)$, and that a gamble is worth its moral expectation $\sum_k p_k\,u(w+x_k)$ rather than its mathematical expectation $\sum_k p_kx_k$. Its value in money is the certainty equivalent $c$ solving $u(w+c)=\sum_k p_k\,u(w+x_k)$.

Result: Under moral expectation with $u=\log$ the St. Petersburg game has a finite value that depends on wealth: about 3 ducats for someone who has 10, about 6 for someone who has 1000. Three consequences are drawn in the paper. A fair gamble, one with zero expected gain, always lowers moral expectation, so a prudent person declines fair bets. Insurance can be worth buying at a premium above its expected cost and worth selling at that premium by someone wealthier, so both sides gain. Splitting a shipment across several ships raises moral expectation. Cramer's alternatives, $u=\sqrt{x}$ or a utility that stops growing beyond some wealth, give the same qualitative answers. Menger (1934) showed that for any unbounded $u$ there is a modified game, paying $x_k$ with $u(x_k)=2^k$, whose moral expectation is infinite, so only bounded utility disposes of the paradox entirely.

Work: Concavity, and the decision to evaluate final wealth. Diminishing marginal utility makes the utility of the game converge although its expectation diverges, and makes a sure thing worth more than a fair gamble with the same mean. The log specification is incidental; what carries everything is that value attaches to the person's utility rather than to the money. Evaluating final positions $w+x_k$, asset integration, is a second and less visible assumption, and it is the one prospect theory later gives up.

Proof: A specification and a calculation rather than a theorem. $du=b\,dx/x$ integrates to $b\log x$ plus a constant. For the game, $\sum_k 2^{-k}\log(w+2^{k-1})$ converges because $\log(w+2^{k-1})$ grows like $k\log 2$ while the weights fall like $2^{-k}$; the certainty equivalent is $\exp$ of the sum, minus $w$. The claim about fair bets is Jensen's inequality for concave $u$: if $\sum_kp_kx_k=0$ then $u(w)=u\big(w+\sum_kp_kx_k\big)\ge\sum_kp_k\,u(w+x_k)$. Menger's construction: given unbounded $u$, choose $x_k$ with $u(x_k)\ge 2^k$ and pay $x_k$ with probability $2^{-k}$.

Matters: The first statement of expected utility and of diminishing marginal utility, two centuries before either was standard, and the first analysis of insurance and diversification. Its weakness was the source of $u$: an introspective measure of satisfaction, which ordinalism discarded in the 1930s, so that there was no basis for the criterion until von Neumann and Morgenstern derived a cardinal $u$ from preferences over lotteries. The paper also fixed the questions the field kept asking: what justifies valuing gambles by an expectation at all (vNM, Savage), what risk aversion is (Pratt 1964, Arrow 1965: curvature of $u$, measured by $-u''/u'$), and whether people evaluate final wealth or gains and losses (Kahneman–Tversky 1979).

Connections:
- [[Von Neumann–Morgenstern expected utility]] supplies the foundation Bernoulli's $u$ lacked.
- [[Savage's subjective expected utility]] extends the criterion to subjective probabilities.
- Pratt (1964), Arrow (1965): risk aversion as curvature of $u$.
- Menger (1934) on boundedness; Savage's P7 and Arrow (1971) for why utility is bounded in the axiomatic theories.
- Kahneman–Tversky (1979): reference dependence in place of asset integration.
- Samuelson (1977): the paradox's history and its later variants.

## Von Neumann–Morgenstern expected utility

Papers:
- von Neumann, J. and O. Morgenstern (1944; 2nd ed. 1947), *Theory of Games and Economic Behavior*, Princeton University Press, §3 and the appendix "The Axiomatic Treatment of Utility," added in the second edition.
- Marschak, J. (1950), "Rational Behavior, Uncertain Prospects, and Measurable Utility," *Econometrica* 18(2), 111–141. The axioms as economists state them.
- Herstein, I. N. and J. Milnor (1953), "An Axiomatic Approach to Measurable Utility," *Econometrica* 21(2), 291–297. Mixture spaces and the clean proof.
- Samuelson, P. A. (1952), "Probability, Utility, and the Independence Axiom," *Econometrica* 20(4), 670–678, and Malinvaud, E. (1952), "Note on von Neumann–Morgenstern's Strong Independence Axiom," *Econometrica* 20(4), 679. Where the independence axiom hides in the original.
- Allais, M. (1953), "Le comportement de l'homme rationnel devant le risque," *Econometrica* 21(4), 503–546. The counterexample.

Question: When probabilities are objective, what conditions on preferences over lotteries make choice equivalent to maximizing the expectation of some utility, and in what sense is that utility unique?

Setting: A set of outcomes $X$. Lotteries are probability distributions on $X$ with finite support; $P$ is the set of them, closed under mixing, $\alpha p+(1-\alpha)q\in P$. A preference relation $\succsim$ on $P$ and three axioms.
- Weak order: $\succsim$ is complete and transitive.
- Continuity: if $p\succ q\succ r$ there are $\alpha,\beta\in(0,1)$ with $\alpha p+(1-\alpha)r\succ q\succ\beta p+(1-\beta)r$.
- Independence: for all $p,q,r$ and $\alpha\in(0,1]$, $p\succ q$ if and only if $\alpha p+(1-\alpha)r\succ\alpha q+(1-\alpha)r$.

Result: $\succsim$ satisfies the three axioms if and only if there is $u:X\to\mathbb{R}$ with
$$p\succsim q\iff\sum_x p(x)\,u(x)\ \ge\ \sum_x q(x)\,u(x),$$
and $u$ is unique up to positive affine transformations $au+b$ with $a>0$. Herstein–Milnor: the same on any mixture space, with the representation an affine function on $P$.

Work: Independence. Mixing two lotteries with a common third does not change their ranking, which is what makes the representation linear in probabilities; it is the substantive content, since weak order and continuity alone give only a continuous ordinal utility on $P$. Continuity excludes lexicographic preferences. Cardinality comes from mixing itself: probabilities supply a ruler, and $u$ is cardinal only in the sense that it is pinned down by preferences over lotteries, not because satisfaction is measurable.

Proof: Calibration against the best and worst outcomes, for finite $X$. Let $b\succsim x\succsim w$ for all $x$; if $b\sim w$ every lottery is indifferent and a constant $u$ works. Independence makes the line $\alpha\delta_b+(1-\alpha)\delta_w$ strictly increasing in $\alpha$, and continuity then gives, for each lottery $p$, a unique $\alpha_p\in[0,1]$ with $p\sim\alpha_p\delta_b+(1-\alpha_p)\delta_w$. Set $U(p)=\alpha_p$, so $p\succsim q\iff\alpha_p\ge\alpha_q$. Independence applied to the two indifferences gives $\lambda p+(1-\lambda)q\sim\big(\lambda\alpha_p+(1-\lambda)\alpha_q\big)\delta_b+\dots$, so $U$ is affine, hence $U(p)=\sum_xp(x)\,U(\delta_x)$ and $u(x)=U(\delta_x)$. Uniqueness: any other affine representation $V$ is determined by $V(\delta_b)$ and $V(\delta_w)$ through the same $\alpha_p$. Infinite $X$: run the argument on finite subsets and patch, which works for simple lotteries; non-simple lotteries or unbounded $u$ need a further continuity condition (Fishburn 1970).

Matters: It rehabilitated cardinal utility on ordinalist terms and produced the object on which the theory of choice under risk is built: risk attitudes are the curvature of $u$ (Pratt 1964, Arrow 1965), comparative risk is the Rothschild–Stiglitz (1970) order, and insurance, portfolio choice, auctions, contracts and mixed strategies in games all run on expected utility. The appendix exists because the game theory needed it: mixed strategies require payoffs that are meaningful up to affine transformation. Its empirical trouble came almost at once, Allais (1953) showing systematic violations of independence (the common consequence and common ratio effects), and the responses, Machina (1982), rank-dependent utility (Quiggin 1982) and prospect theory (Kahneman–Tversky 1979, Tversky–Kahneman 1992), are each defined by which part of the independence axiom they keep.

Connections:
- [[Bernoulli's expected utility]]: the criterion without the foundation.
- [[Savage's subjective expected utility]] derives the probabilities as well; Anscombe–Aumann (1963) uses vNM lotteries as the consequences of acts, and [[Minimax]] builds on that framework.
- Herstein–Milnor (1953): mixture spaces. Fishburn (1970): the general case.
- Pratt (1964), Arrow (1965): risk aversion. Rothschild–Stiglitz (1970): increasing risk.
- Allais (1953), Kahneman–Tversky (1979), Machina (1982), Quiggin (1982): non-expected utility.
- Kreps (1988), *Notes on the Theory of Choice*: the standard exposition.

## Savage's subjective expected utility

Papers:
- Savage, L. J. (1954), *The Foundations of Statistics*, Wiley; 2nd revised edition, Dover 1972. Chapters 2, 3 and 5.
- Ramsey, F. P. (1926), "Truth and Probability," in *The Foundations of Mathematics* (1931); de Finetti, B. (1937), "La prévision: ses lois logiques, ses sources subjectives," *Annales de l'Institut Henri Poincaré* 7, 1–68. Subjective probability from betting, before Savage.
- Anscombe, F. J. and R. J. Aumann (1963), "A Definition of Subjective Probability," *Annals of Mathematical Statistics* 34(1), 199–205. The tractable version, with objective lotteries as consequences.
- Ellsberg, D. (1961), "Risk, Ambiguity, and the Savage Axioms," *Quarterly Journal of Economics* 75(4), 643–669. The counterexample to P2.
- Fishburn, P. C. (1970), *Utility Theory for Decision Making*, ch. 14. The complete proof.

Question: With no objective probabilities given, can both the probabilities and the utility in an expected utility criterion be derived from preferences over acts alone?

Setting: States $S$, events $E\subseteq S$ (Savage allows all subsets), consequences $X$, acts $f:S\to X$. Write $f_Eh$ for the act equal to $f$ on $E$ and to $h$ off $E$, write a constant act as its consequence, and call $E$ null if $f_Eh\sim g_Eh$ for all $f,g,h$. Conditional preference $f\succsim_Eg$ means $f_Eh\succsim g_Eh$ for all $h$. The postulates.
- P1. $\succsim$ is a weak order.
- P2 (sure-thing principle). $f_Eh\succsim g_Eh$ iff $f_Eh'\succsim g_Eh'$: how $f$ and $g$ compare does not depend on what they share off $E$.
- P3 (state independence). For non-null $E$ and consequences $x,y$: $x_Eh\succsim y_Eh$ iff $x\succsim y$.
- P4 (betting preferences do not depend on the stakes). For $x\succ y$ and $x'\succ y'$: $x_Ay\succsim x_By$ iff $x'_Ay'\succsim x'_By'$.
- P5. Some $x\succ y$.
- P6 (small events). If $f\succ g$ then for every $x$ there is a finite partition $\{E_1,\dots,E_n\}$ of $S$ with $x_{E_i}f\succ g$ and $f\succ x_{E_i}g$ for every $i$.
- P7 (for non-simple acts). If $f\succsim_E g(s)$ for all $s\in E$ then $f\succsim_Eg$, and if $f(s)\succsim_Eg$ for all $s\in E$ then $f\succsim_Eg$.

Result: $\succsim$ satisfies P1–P6 iff there are a finitely additive probability $\mu$ on $S$ that is convex-ranged (for every event $E$ and $\rho\in[0,1]$ some $F\subseteq E$ has $\mu(F)=\rho\,\mu(E)$) and a utility $u:X\to\mathbb{R}$ such that, for simple acts,
$$f\succsim g\iff\int_S u(f(s))\,d\mu(s)\ \ge\ \int_S u(g(s))\,d\mu(s);$$
$\mu$ is unique and $u$ is unique up to positive affine transformation. With P7 the representation holds for all acts and $u$ is bounded.

Work: P2 and P4 make the ranking of bets depend on the events alone, which yields a qualitative probability, a complete, transitive and additive likelihood order on events; P6 makes the state space atomless, so that the order is represented by a unique number and every lottery can be manufactured from events. P6 is the heavy lift: it rules out finite state spaces, where probabilities derived from preference are not unique. The probabilities are a theorem about the agent's betting dispositions rather than an input, which is the point of the construction.

Proof: (1) Likelihood from bets. For $x\succ y$ define $A\succsim^*B$ iff $x_Ay\succsim x_By$; P4 makes this independent of the stakes, P1 makes it a weak order, and P2 makes it additive: for $C$ disjoint from $A$ and $B$, $A\succsim^*B\iff A\cup C\succsim^*B\cup C$. (2) Numbers from fineness. P6 yields, for every $n$, partitions of $S$ into $2^n$ events that are uniform up to the order (no union of $r$ cells is more likely than any union of $r+1$), and $\mu(A)=\sup\{k/2^n:A\succsim^*\text{some union of }k\text{ cells}\}$ is the unique additive representation of $\succsim^*$; convex-rangedness follows. (3) Utility from induced lotteries. A simple act induces a distribution over consequences under $\mu$; P2 and P3 give that acts with the same distribution are indifferent, and because $\mu$ is convex-ranged every simple lottery is induced by some act, so $\succsim$ defines a preference over simple lotteries, which satisfies the vNM axioms (independence from P2, continuity from P6). The vNM theorem gives $u$, and $\int u(f)\,d\mu$ is the expected utility of the induced lottery. (4) P7 extends the representation to arbitrary acts by dominance and forces $u$ to be bounded, since an unbounded $u$ would permit a St. Petersburg act that P7 cannot rank.

Matters: The foundation of Bayesian decision theory. Probability is personal and is read off from preference, which with Ramsey and de Finetti underwrites Bayesian statistics and, in economics, the Harsanyi (1967–68) apparatus of types and priors, rational expectations and the priors of mechanism design: a prior is a representation of coherent betting, not a claim about the world. It also set the terms of every later dispute. Ellsberg (1961) showed that choices between bets on an urn of known composition and one of unknown composition violate P2, which produced maxmin expected utility ([[Minimax]]), Choquet expected utility (Schmeidler 1989) and the smooth model (Klibanoff–Marinacci–Mukerji 2005); Anscombe–Aumann (1963) replaced P6 with objective lotteries and became the working framework; state-dependent utility (Karni 1985) attacks P3; Machina–Schmeidler (1992) keep probabilistic sophistication while dropping P2.

Connections:
- [[Von Neumann–Morgenstern expected utility]] is the last step of the proof.
- [[Arrow–Debreu contingent claims]]: the same states and acts in a market; a Savage act is a state-contingent consumption plan.
- [[Minimax]]: the alternative Savage wrote against, and its return after Ellsberg.
- Ramsey (1926), de Finetti (1937): subjective probability from betting.
- Anscombe–Aumann (1963): the finite-state workhorse.
- Ellsberg (1961), Schmeidler (1989), Machina–Schmeidler (1992), Klibanoff–Marinacci–Mukerji (2005).
- Kreps (1988), ch. 8–10, and Gilboa (2009), *Theory of Decision under Uncertainty*: expositions.

## Arrow–Debreu contingent claims

Years: 1953–59

Papers:
- Arrow, K. J. (1953), "Le rôle des valeurs boursières pour la répartition la meilleure des risques," *Économétrie*, Colloques Internationaux du CNRS 40, 41–47. English version, "The Role of Securities in the Optimal Allocation of Risk-bearing," *Review of Economic Studies* 31(2), 1964, 91–96.
- Debreu, G. (1959), *Theory of Value*, ch. 7, "Uncertainty."
- Hirshleifer, J. (1965), "Investment Decision under Uncertainty: Choice-Theoretic Approaches," *Quarterly Journal of Economics* 79(4), 509–536. The state-preference approach made standard.

Question: How does uncertainty enter general equilibrium, and what do markets need in order to allocate risk efficiently? Is a complete set of contingent contracts required, or will a smaller set of securities do?

Setting: States $s=1,\dots,S$, one of which will be revealed, and $L$ physical goods. Debreu: a commodity is a good together with the state in which it is delivered, so the commodity space is $\mathbb{R}^{LS}$ and a consumption plan is a state-contingent bundle $x=(x_1,\dots,x_S)$. Preferences $\succsim_i$ are defined directly on plans; no probabilities and no expected utility are assumed, though $U_i(x)=\sum_s\pi_{is}\,v_i(x_s)$ is the leading case. Contingent-claims markets: before the state is known, agents trade claims to good $l$ in state $s$ at price $p_{ls}$ under one budget constraint, $\sum_sp_s\cdot x_{is}\le\sum_sp_s\cdot\omega_{is}$. Arrow: instead, $S$ securities trade before the state, security $s$ paying one unit of account in state $s$ and nothing otherwise, at price $q_s$, and spot markets for the $L$ goods open in each state at prices $p_s$ once it is revealed.

Result: (Debreu) The theory applies unchanged. Under the standard assumptions on preferences and endowments a competitive equilibrium with contingent-claims prices exists, and both welfare theorems hold, so the equilibrium allocation of risk is ex ante Pareto optimal whatever agents believe about the states. (Arrow) The allocation reached with contingent claims is also reached with $S$ securities plus spot markets, and conversely: with state prices $q_s$ an agent's $S+1$ budget constraints collapse to the single constraint $\sum_sq_s\,p_s\cdot(x_s-\omega_s)\le 0$. With fewer than $S$ linearly independent securities the budget sets differ and the equilibrium is generally not optimal, which is where the incomplete-markets literature in [[Radner equilibrium]] begins.

Work: The state space, used as a device for reinterpreting the commodity space; everything else is the existing theory. Two things follow. Preferences over contingent plans are the primitives, so beliefs can differ across agents and need not be probabilistic at all; subjective expected utility is the special case in which preferences over plans are additively separable across states (Debreu 1960). And complete markets, the condition under which the single ex ante budget constraint equals the sequence of constraints, is the assumption everything hangs on.

Proof: Debreu's part is a reinterpretation rather than an argument: index commodities by state and apply [[Existence of competitive equilibrium]] and the welfare theorems verbatim. Arrow's part is an arbitrage argument. Given the spot prices $p_s$ that will rule in each state and security prices $q_s$, a plan $(x_s)$ is affordable through securities iff holding $\theta_s=p_s\cdot(x_s-\omega_s)$ units of security $s$ for each $s$ costs no more than zero at the start, that is $\sum_sq_s\,p_s\cdot(x_s-\omega_s)\le0$, which is the contingent-claims budget set at prices $q_sp_s$. The two market structures have the same budget sets, hence the same equilibria. The $q_s$ are the state prices; normalized to sum to one they are the risk-neutral probabilities, and under expected utility $q_s\propto\pi_s\,v'(x_s)$ at the optimum.

Matters: It is the state-preference approach: uncertainty as a reinterpretation of the commodity space, which made existence and the welfare theorems available for the allocation of risk and made complete markets a concept. State prices, risk-neutral probabilities and the stochastic discount factor come from here, and so do asset pricing (Lucas 1978, Harrison–Kreps 1979), the pricing of derivatives by replication, and the equivalence between contingent claims and securities that Radner (1972) then stress-tests. It also joins decision theory to markets: an act in [[Savage's subjective expected utility]] is a state-contingent consumption plan, and the market prices such plans without needing anyone's probabilities to agree, or even to exist. Arrow's paper was presented at the 1952 Paris colloquium at which Allais challenged Savage, so both halves of this topic were on the table at the same meeting.

Connections:
- [[Existence of competitive equilibrium]] and [[Radner equilibrium]]: the theory it reinterprets and the sequential generalization.
- [[Savage's subjective expected utility]]: states, acts and plans are the same objects.
- Debreu (1960), "Topological Methods in Cardinal Utility Theory": additive separability across states.
- Hirshleifer (1965, 1966): the state-preference approach in investment theory.
- Lucas (1978), Harrison–Kreps (1979), Ross (1976): asset pricing from state prices.
- Arrow (1965), *Aspects of the Theory of Risk-Bearing*; Borch (1962) on optimal risk sharing.

## Minimax

Years: 1928–89

Papers:
- von Neumann, J. (1928), "Zur Theorie der Gesellschaftsspiele," *Mathematische Annalen* 100, 295–320. The minimax theorem.
- Wald, A. (1945), "Statistical Decision Functions Which Minimize the Maximum Risk," *Annals of Mathematics* 46(2), 265–280, and Wald, A. (1950), *Statistical Decision Functions*, Wiley. Statistical decision theory as a game against nature; the framework begins in Wald (1939), *Annals of Mathematical Statistics* 10(4), 299–326.
- Savage, L. J. (1951), "The Theory of Statistical Decision," *Journal of the American Statistical Association* 46(253), 55–67. Minimax regret, and the step away from minimax toward [[Savage's subjective expected utility]].
- Gilboa, I. and D. Schmeidler (1989), "Maxmin Expected Utility with Non-Unique Prior," *Journal of Mathematical Economics* 18(2), 141–153. Minimax over priors, axiomatized.

Question: How should one choose when nothing pins down a probability over the states, and what does the worst-case criterion amount to?

Setting: Wald. A parameter $\theta\in\Theta$, nature's choice; data $X\sim P_\theta$; actions $a\in A$; a loss $L(\theta,a)$. A decision rule $\delta$ maps data to actions (randomized rules allowed) and has risk $R(\theta,\delta)=\mathbb{E}_\theta\,L(\theta,\delta(X))$. A rule is minimax if it attains $\inf_\delta\sup_\theta R(\theta,\delta)$, Bayes for the prior $\pi$ if it minimizes $\int R(\theta,\delta)\,d\pi(\theta)$, and admissible if no rule has risk weakly lower everywhere and strictly lower somewhere.

Gilboa–Schmeidler. The Anscombe–Aumann setup: states $S$ with an algebra of events, consequences in a convex set $Y$ of lotteries, acts $f:S\to Y$ taking finitely many values, mixtures taken statewise. Six axioms: weak order; certainty independence, for constant $h$ and $\alpha\in(0,1)$, $f\succ g$ iff $\alpha f+(1-\alpha)h\succ\alpha g+(1-\alpha)h$; continuity; monotonicity, $f(s)\succsim g(s)$ for all $s$ implies $f\succsim g$; uncertainty aversion, $f\sim g$ implies $\alpha f+(1-\alpha)g\succsim f$; nondegeneracy.

Result: Von Neumann. A finite two-person zero-sum game has a value in mixed strategies: $\max_x\min_y x^{\top}Ay=\min_y\max_x x^{\top}Ay$. Wald. Treat the decision problem as a zero-sum game between the statistician and nature. Under compactness conditions, with randomized rules, the game has a value, a minimax rule exists, and it is a Bayes rule against a least favorable prior; a Bayes rule whose risk is constant in $\theta$ is minimax; and, the complete class theorem, every admissible rule is a Bayes rule or a limit of Bayes rules, so nothing is lost by restricting attention to Bayes rules. Gilboa–Schmeidler. The six axioms hold iff there are a nonconstant affine $u$ on $Y$ and a nonempty closed convex set $C$ of finitely additive probabilities on $S$ such that
$$f\succsim g\iff\min_{p\in C}\int_S u(f)\,dp\ \ge\ \min_{p\in C}\int_S u(g)\,dp;$$
$C$ is unique and $u$ is unique up to positive affine transformation. With full independence in place of certainty independence, $C$ is a singleton and the representation is Anscombe–Aumann subjective expected utility.

Work: Randomization and convexity make the minimax theorem work: with mixed strategies the strategy sets are convex and the payoff bilinear, so the maximin and minimax values coincide, and the least favorable prior is nature's optimal mixed strategy. In Gilboa–Schmeidler the work is done by weakening independence to mixtures with constant acts only, which keeps the representation homogeneous and translation invariant without forcing linearity across all acts, and by uncertainty aversion, which makes hedging between indifferent acts weakly attractive and so makes the functional concave; a monotone, concave, constant-linear functional is a minimum of expectations.

Proof: Von Neumann: the two values differ only if a convex set, the achievable payoff vectors, can be separated from an orthant; separation of convex sets, or Brouwer, closes the gap, and the elementary supporting-hyperplane proof is Ville's (1938). Wald: the same theorem applied to the game with payoff $R(\theta,\delta)$, nature mixing over $\theta$ by choosing a prior and the statistician mixing over rules; the value equals both $\inf_\delta\sup_\pi\int R\,d\pi$ and $\sup_\pi\inf_\delta\int R\,d\pi$, the second being the Bayes risk of the least favorable prior, which gives minimax equals Bayes against $\pi^*$; the complete class theorem is a separating-hyperplane argument on the convex set of risk functions. Gilboa–Schmeidler: define $I$ on utility profiles $a=u\circ f$ by $I(a)=u(\text{certainty equivalent of }f)$. Certainty independence gives $I(\lambda a+c)=\lambda I(a)+c$ for $\lambda>0$ and constants $c$, monotonicity gives $a\ge b\Rightarrow I(a)\ge I(b)$, and uncertainty aversion gives superadditivity, $I(a+b)\ge I(a)+I(b)$, hence concavity. A concave positively homogeneous functional is the infimum of the linear functionals dominating it, and monotonicity with $I(1)=1$ makes those probabilities: $I(a)=\min_{p\in C}\int a\,dp$ with $C=\{p:\int a\,dp\ge I(a)\text{ for all }a\}$.

Matters: Minimax is the non-Bayesian pole of decision theory, and the theorems tie the two poles together: Wald's minimax rules are Bayes rules against the worst prior, and the complete class theorem says the Bayes rules are all one needs even on frequentist grounds. Savage's book was written against minimax; the objection, that it ignores everything but the worst state and recommends never betting, is what his minimax regret (1951) tried and failed to repair, and the *Foundations* then replaced the criterion with subjective expected utility. Ellsberg's evidence brought the worst case back in controlled form: the Gilboa–Schmeidler agent is Bayesian for each prior and minimax across priors, which is the standard model of ambiguity aversion, the basis of robust control (Hansen–Sargent) and of worst-case mechanism and contract design (Carroll 2015; Bergemann–Schlag 2011 for regret), and the reason minimax regret reappears in learning theory.

Connections:
- [[Savage's subjective expected utility]]: the Bayesian alternative, and the postulate (P2) Gilboa–Schmeidler weaken.
- [[Von Neumann–Morgenstern expected utility]]: supplies the lotteries in the Anscombe–Aumann framework.
- Ellsberg (1961): the evidence. Schmeidler (1989): Choquet expected utility, the companion representation. Maccheroni–Marinacci–Rustichini (2006): variational preferences, the general concave case.
- Ville (1938), Kakutani (1941), Fan (1953): proofs and generalizations of the minimax theorem.
- Blackwell–Girshick (1954), *Theory of Games and Statistical Decisions*: the synthesis of Wald and von Neumann.
- Hansen–Sargent (2008), *Robustness*; Carroll (2015), "Robustness and Linear Contracts"; Bergemann–Schlag (2011), "Robust Monopoly Pricing."

# Auctions

Vickrey (1961) found that a sealed-bid auction in which the winner pays the second-highest bid makes truthful bidding dominant, computed that it raises the same expected revenue as the first-price auction, and left two questions: which auction is best for the seller, and what happens when values are not private. Myerson (1981), with Riley and Samuelson, answered the first for independent private values, revenue equivalence, virtual values and the reserve, and Bulow and Klemperer (1996) put the answer in proportion: one more bidder is worth more than the optimal reserve. Milgrom and Weber (1982) answered the second with affiliation and the linkage principle, and Crémer and McLean (1985, 1988) showed that correlation, pushed to its conclusion, lets the seller take everything. Border (1991) described the set of interim allocation rules an auction can produce, Kleiner, Moldovanu and Strack (2021) identified its extreme points, and that geometry is the entry to the multidimensional problem, where Rochet and Choné, Manelli and Vincent and Daskalakis, Deckelbaum and Tzamos found bunching, randomization and infinite menus, Hart and Nisan (2017) measured how far simple mechanisms fall short, and Lahr and Niemeyer (2024) showed that extreme points are dense, which is why no closed form exists. The last two entries leave the single object: gross substitutes make ascending auctions for many goods converge, which is tâtonnement in discrete form, and interdependent values with multidimensional signals make efficient design generically impossible.

## Vickrey and the second-price auction

Papers:
- Vickrey, W. (1961), "Counterspeculation, Auctions, and Competitive Sealed Tenders," *Journal of Finance* 16(1), 8–37.
- Vickrey, W. (1962), "Auctions and Bidding Games," in *Recent Advances in Game Theory*, Princeton Conference Series 29, 15–27.
- Clarke, E. (1971), "Multipart Pricing of Public Goods," *Public Choice* 11, 17–33; Groves, T. (1973), "Incentives in Teams," *Econometrica* 41(4), 617–631. The generalization to arbitrary allocation problems.
- Rothkopf, M., T. Teisberg and E. Kahn (1990), "Why Are Vickrey Auctions Rare?," *Journal of Political Economy* 98(1), 94–109; Lucking-Reiley, D. (2000), "Vickrey Auctions in Practice: From Nineteenth-Century Philately to Twenty-First-Century E-Commerce," *Journal of Economic Perspectives* 14(3), 183–192; Ausubel, L. and P. Milgrom (2006), "The Lovely but Lonely Vickrey Auction," in *Combinatorial Auctions*, MIT Press.

Question: Can a sealed-bid procedure be designed so that bidders have no reason to shade or to speculate about one another, and how do the standard auction forms, English, Dutch, first-price and second-price sealed bid, compare in outcome and in revenue?

Setting: One indivisible object, $n$ bidders with private values $v_1,\dots,v_n$ known to themselves. First-price sealed bid: highest bid wins and pays its bid. Second-price sealed bid: highest bid wins and pays the second-highest bid. English (Vickrey's "progressive") auction: the price rises until one bidder remains. Dutch auction: the price falls until someone accepts. For revenue comparisons the values are independent draws from a common distribution, uniform on $[0,1]$ in the paper's calculation.

Result: (1) In the second-price auction, bidding one's value is a weakly dominant strategy, whatever the others do and whatever they know, and the object goes to the bidder who values it most. (2) The English auction is strategically equivalent to the second-price auction under private values (drop out at one's value), and the Dutch auction is strategically equivalent to the first-price sealed-bid auction in every setting. (3) With $n$ bidders and values uniform on $[0,1]$, the symmetric equilibrium of the first-price auction is $b(v)=\tfrac{n-1}{n}v$, and the expected price in both the first-price and the second-price auction is $\tfrac{n-1}{n+1}$. This is revenue equivalence in the first case where it was computed. (4) For $k$ identical units and unit-demand bidders, the rule that all winners pay the highest rejected bid keeps bidding truthful; Vickrey also sketched the multi-unit extension in which each unit a bidder wins is priced at the corresponding rejected bid of the others. (5) For the two-sided market of the title, a "counterspeculating" agency that buys from sellers and sells to buyers at prices determined by the others' bids induces truthful bids on both sides but runs a deficit, the observation that becomes the budget-balance problem of Myerson–Satterthwaite (1983).

Work: Separating the allocation from the payment. In the second-price auction a bid determines only whether one wins, and the price is set by others' bids, so the bid is a pure statement of the maximum one is willing to pay and there is nothing to gain by misstating it. The revenue comparison rests on independence and risk neutrality: the first-price bidder shades to exactly the expected second-highest value conditional on winning, and the two formats transfer the same expected amount.

Proof: Dominance. Let $y$ be the highest competing bid. Bidding $b=v$ yields $v-y$ if $v>y$ and $0$ otherwise. Any $b>v$ changes the outcome only when $y\in(v,b)$, where it wins at a loss $v-y<0$; any $b<v$ changes the outcome only when $y\in(b,v)$, where it forgoes a gain. Revenue equality in the uniform case. The second-highest of $n$ uniforms has expectation $\tfrac{n-1}{n+1}$. In the first-price auction a bidder with value $v$ choosing a bid as if of type $z$ wins with probability $z^{n-1}$, so the first-order condition $(n-1)z^{n-2}(v-b(z))-z^{n-1}b'(z)=0$ at $z=v$ gives $b(v)=\tfrac{n-1}{n}v$; the winner's expected payment is $\tfrac{n-1}{n}\,\mathbb{E}[\max_i v_i]=\tfrac{n-1}{n}\cdot\tfrac{n}{n+1}$. The general argument, that in any auction in which the highest value wins the expected payment of each type is pinned down by the allocation, is [[Myerson's optimal auction]].

Matters: The first mechanism designed to make truth-telling dominant, and the source of the Vickrey–Clarke–Groves family: Clarke and Groves showed that charging each agent the externality she imposes implements the efficient outcome in dominant strategies in any quasilinear problem. The equivalences between formats and the uniform-case revenue calculation set the agenda that Myerson, Riley–Samuelson and Milgrom–Weber completed, and the counterspeculation deficit anticipates the impossibility of efficient budget-balanced bilateral trade. The paper was ignored for a decade; Vickrey shared the 1996 Nobel prize for it. Why second-price auctions are nevertheless rare (fear of bid disclosure, the seller's temptation to insert a shill bid, collusion, the failure of dominance once values are interdependent or bidders have budgets) is the subject of Rothkopf–Teisberg–Kahn and Ausubel–Milgrom.

Connections:
- [[Myerson's optimal auction]]: the general revenue-equivalence theorem and the seller's best auction.
- [[Affiliated values and the linkage principle]]: the English and second-price auctions come apart once values are interdependent.
- [[Gross substitutes and ascending auctions]]: Vickrey payments for many goods and the ascending auctions that reach them.
- [[Efficient auctions with interdependent values]]: the generalized Vickrey auction and its limits.
- Clarke (1971), Groves (1973), Green–Laffont (1977), Holmström (1979): the VCG mechanism and its uniqueness.
- Myerson–Satterthwaite (1983): the deficit Vickrey found is unavoidable.

## Myerson's optimal auction

Years: 1981–89

Papers:
- Myerson, R. B. (1981), "Optimal Auction Design," *Mathematics of Operations Research* 6(1), 58–73.
- Riley, J. G. and W. F. Samuelson (1981), "Optimal Auctions," *American Economic Review* 71(3), 381–392. The symmetric case, independently.
- Harris, M. and A. Raviv (1981), "Allocation Mechanisms and the Design of Auctions," *Econometrica* 49(6), 1477–1499. Also independent.
- Bulow, J. and J. Roberts (1989), "The Simple Economics of Optimal Auctions," *Journal of Political Economy* 97(5), 1060–1090. Virtual values as marginal revenue.
- Myerson, R. B. (1979), "Incentive Compatibility and the Bargaining Problem," *Econometrica* 47(1), 61–73. The revelation principle used throughout.

Question: Among all selling procedures, not just the standard auctions, which maximizes the seller's expected revenue when bidders' values are private information, and what do all procedures that allocate the same way have in common?

Setting: One object, $n$ risk-neutral bidders, types $t_i$ independent with distributions $F_i$ on $[a_i,b_i]$ and densities $f_i>0$; seller's own value $t_0$. Myerson allows revision effects, $v_i(t)=t_i+\sum_{j\ne i}e_j(t_j)$; the statement below is for private values $e_j\equiv 0$. By the revelation principle a mechanism is a pair $(p,x)$: $p_i(t)$ the probability that $i$ gets the object and $x_i(t)$ her expected payment when the reports are $t$, with $\sum_ip_i(t)\le 1$. Interim quantities $Q_i(t_i)=\mathbb{E}_{t_{-i}}p_i(t)$ and $U_i(t_i)=\mathbb{E}_{t_{-i}}[t_ip_i(t)-x_i(t)]$. Feasibility: incentive compatibility, $U_i(t_i)\ge\mathbb{E}_{t_{-i}}[t_ip_i(s_i,t_{-i})-x_i(s_i,t_{-i})]$ for all $s_i$, and individual rationality, $U_i\ge 0$. Virtual value $c_i(t_i)=t_i-\dfrac{1-F_i(t_i)}{f_i(t_i)}$; the regular case is $c_i$ increasing.

Result: (1) Characterization. $(p,x)$ is feasible iff each $Q_i$ is nondecreasing, $U_i(t_i)=U_i(a_i)+\int_{a_i}^{t_i}Q_i(s)\,ds$, and $U_i(a_i)\ge 0$. (2) Revenue equivalence. The seller's expected revenue is
$$t_0+\mathbb{E}\Big[\sum_ip_i(t)\big(c_i(t_i)-t_0\big)\Big]-\sum_iU_i(a_i),$$
so any two mechanisms with the same allocation rule and the same utility for the lowest types yield the same expected revenue and the same expected payment from every type. (3) Optimal auction, regular case: give the object to the bidder with the highest $c_i(t_i)$ provided it exceeds $t_0$, keep it otherwise, and charge the winner the lowest type at which she would still have won. With symmetric bidders this is a second-price (or English, or first-price) auction with reserve $r^*$ solving $c(r^*)=t_0$, independent of $n$; for $F$ uniform on $[0,1]$ and $t_0=0$, $r^*=\tfrac12$. With asymmetric bidders the optimal auction discriminates: it can award the object to a bidder who does not have the highest value, favoring the bidder whose distribution is weaker. (4) General case: replace $c_i$ by the ironed virtual value $\bar c_i$, the derivative of the convex hull of $H_i(q)=\int_0^q c_i(F_i^{-1}(r))\,dr$ evaluated at $F_i(t_i)$, and allocate by highest $\bar c_i$. Riley–Samuelson: in the symmetric case every auction in which the highest bidder wins and a bidder at the reserve pays nothing in expectation yields the same revenue, and the optimal reserve exceeds $t_0$, so the seller sometimes keeps an object she values less than the bidders do. Bulow–Roberts: $c_i$ is the marginal revenue of a monopolist facing demand $1-F_i$, the optimal auction sells to the highest marginal revenue, and ironing is the usual flattening of a non-monotone marginal revenue curve.

Work: Independence and quasilinearity. Independence makes $i$'s interim allocation a function of her own type alone, so incentive compatibility reduces to a one-dimensional envelope condition and the seller cannot use others' reports to learn about $i$ ([[Crémer–McLean]] is what happens otherwise). Linearity of payoffs in the type gives single crossing, so the envelope condition plus monotonicity of $Q_i$ is the whole of incentive compatibility. Regularity lets the objective be maximized pointwise; ironing handles its failure. Risk neutrality is what makes revenue equivalence hold across formats.

Proof: Characterization. Incentive compatibility between $t_i$ and $s_i$ in both directions gives $(t_i-s_i)Q_i(s_i)\le U_i(t_i)-U_i(s_i)\le(t_i-s_i)Q_i(t_i)$, so $Q_i$ is nondecreasing and $U_i$ is convex with derivative $Q_i$ almost everywhere, which is the integral formula; conversely monotonicity and the formula imply the inequalities. Revenue. $\mathbb{E}[x_i]=\mathbb{E}[t_iQ_i(t_i)]-\mathbb{E}[U_i(t_i)]$, and integrating $\int U_i\,dF_i$ by parts with $U_i'=Q_i$ turns it into $\int Q_i(t_i)\frac{1-F_i(t_i)}{f_i(t_i)}\,dF_i+U_i(a_i)$, which gives the virtual-value formula. Optimization. The formula is linear in $p$, so maximize $\sum_ip_i(t)(c_i(t_i)-t_0)$ pointwise and set $U_i(a_i)=0$; in the regular case the resulting $Q_i$ is nondecreasing, and the payment follows from the envelope formula. Ironing. Writing $Q_i$ in quantile space, $\int Q_i(c_i-\bar c_i)\,dF_i=\int_0^1\tilde Q_i(q)\,d(H_i-G_i)(q)=-\int_0^1(H_i-G_i)\,d\tilde Q_i\le 0$ with $G_i$ the convex hull of $H_i$, since $H_i-G_i\ge 0$ vanishes at $0$ and $1$ and $\tilde Q_i$ is nondecreasing. So the ironed objective bounds the true one for every monotone rule, with equality iff $\tilde Q_i$ is constant wherever $H_i>G_i$; the pointwise maximizer of the ironed objective is monotone and constant there, so it attains the bound.

Matters: The template for Bayesian mechanism design: revelation principle, envelope characterization, virtual surplus, pointwise optimization, ironing. Revenue equivalence explains why the standard auctions are equally good under its assumptions and locates revenue differences in the failures of those assumptions, risk aversion (Maskin–Riley 1984), affiliation ([[Affiliated values and the linkage principle]]), correlation ([[Crémer–McLean]]). The optimal reserve, the exclusion of low types, and the discrimination against strong bidders are the mechanism-design counterparts of monopoly distortions, which Bulow–Roberts made explicit. The same machinery gives Myerson–Satterthwaite (1983), Baron–Myerson (1982) on regulation and Maskin–Riley (1984) on nonlinear pricing, and it is the benchmark that [[Auctions versus negotiations]] compares against and [[Multidimensional screening]] fails to reproduce.

Connections:
- [[Vickrey and the second-price auction]]: the format the regular symmetric case recommends, with a reserve added.
- [[Auctions versus negotiations]]: the value of the optimal reserve against one more bidder.
- [[Border's theorem]] and [[Extreme points and majorization]]: the feasible interim rules and the ironing procedure seen as a problem about extreme points.
- [[Crémer–McLean]]: independence dropped. [[Affiliated values and the linkage principle]]: revenue equivalence dropped.
- [[Multidimensional screening]]: the one-dimensional structure dropped.
- Maskin–Riley (1984), Matthews (1983, 1987): risk-averse bidders. Myerson–Satterthwaite (1983), Baron–Myerson (1982): the method elsewhere.
- Krishna (2010), *Auction Theory*, ch. 5, and Milgrom (2004), *Putting Auction Theory to Work*, ch. 3: expositions.

## Auctions versus negotiations

Papers:
- Bulow, J. and P. Klemperer (1996), "Auctions versus Negotiations," *American Economic Review* 86(1), 180–194.
- Kirkegaard, R. (2006), "A Short Proof of the Bulow–Klemperer Auctions vs. Negotiations Result," *Economic Theory* 28(2), 449–452.
- Dhangwatnotai, P., T. Roughgarden and Q. Yan (2015), "Revenue Maximization with a Single Sample," *Games and Economic Behavior* 91, 318–333. The result as the basis of prior-independent auctions.
- Fu, H., N. Immorlica, B. Lucier and P. Strack (2015), "Randomization Beats Second Price as a Prior-Independent Auction," *ACM EC*. Hartline, J. and T. Roughgarden (2009), "Simple versus Optimal Mechanisms," *ACM EC*.

Question: Which is worth more to a seller, the power to design the sale optimally (a reserve, bargaining power, a take-it-or-leave-it offer) or one more serious bidder in a plain auction with no reserve?

Setting: Risk-neutral symmetric bidders with signals in $[0,1]$, seller's value normalized to $0$, and three assumptions: (A1) marginal revenue is downward sloping, which in the private-values case is Myerson's regularity, $c(v)=v-\frac{1-F(v)}{f(v)}$ increasing; (A2) bidders are serious, every bidder's value is at least the seller's; (A3) symmetry of value functions, signal distributions and strategies. Values may be private or interdependent with affiliated signals as in [[Affiliated values and the linkage principle]]. The absolute auction is an English auction with no reserve. The seller can commit to any mechanism.

Result: (1) An absolute English auction with $N+1$ bidders yields higher expected revenue than an English auction with $N$ bidders followed by an optimal take-it-or-leave-it offer to the last remaining bidder, with private values or with affiliated signals. (2) With independent signals the latter is the optimal mechanism with $N$ bidders (it is the optimal auction of [[Myerson's optimal auction]] with reserve). Hence, with independent signals, an absolute auction with $N+1$ bidders beats every mechanism with $N$ bidders, whatever the seller's bargaining power in a negotiation. Two uniform bidders: the optimal posted price to one bidder, $\tfrac12$, earns $\tfrac14$; the absolute auction with two bidders earns $\tfrac13$; with reserve $\tfrac12$ two bidders earn $\tfrac5{12}$, three bidders with no reserve earn $\tfrac12$. (3) With $K$ units and independent signals, the optimal mechanism with $N\ge K$ bidders is beaten by an absolute auction with $N+K$ bidders. (4) A seller who can fall back on an absolute auction with all $N+1$ bidders gains nothing by negotiating first, so lock-up bids that exclude a bidder should be refused.

Work: The accounting identity of Bulow–Roberts, revenue equals the expected marginal revenue of the winner, together with (A2), which makes the extra bidder's expected marginal revenue zero rather than negative. The regularity assumption (A1) is what makes the absolute auction the best of all always-selling mechanisms, since it is what aligns highest value with highest marginal revenue. With affiliated signals the result survives for the English auction with reserve but not against all mechanisms, since a seller free to use any mechanism can then extract the full surplus ([[Crémer–McLean]]), which beats any absolute auction.

Proof: For values on $[0,\bar v]$, $\mathbb{E}[c(v)]=\int(v-\tfrac{1-F}{f})\,dF=\mathbb{E}[v]-\int(1-F)\,dv=0$, which is (A2) in the private-values case: a bidder who always receives the object for free contributes zero expected marginal revenue. Consider the mechanism with $N+1$ bidders that runs the optimal $N$-bidder mechanism among the first $N$ and gives the object to bidder $N+1$ for nothing whenever it would otherwise go unsold. Its revenue is $\mathbb{E}\big[\max(c_{(1:N)},0)\big]+\mathbb{E}\big[c(v_{N+1})\,\mathbf 1\{\text{unsold}\}\big]$, and the second term is zero by independence and the identity, so this mechanism earns the $N$-bidder optimum. It always sells. Among always-selling mechanisms with $N+1$ bidders the revenue formula is maximized by giving the object to the highest marginal revenue, which under (A1) is the highest value, which is what the absolute auction does. So absolute revenue with $N+1$ bidders $=\mathbb{E}[c_{(1:N+1)}]\ge\mathbb{E}[\max(c_{(1:N)},0)]$. Kirkegaard's proof is the same comparison written as $\mathbb{E}[\max(c_{(1:N)},c(v_{N+1}))]\ge\mathbb{E}[\max(c_{(1:N)},\mathbb{E}[c(v_{N+1})])]$ by Jensen. The affiliated case replaces marginal revenue by its interdependent-values analogue and uses the English auction's revenue ranking.

Matters: It put the optimal-auction program in perspective: the gains from design are second order next to the gains from competition, so a seller should spend on attracting bidders rather than on fine-tuning reserves, and a plain auction is a defensible default when the seller does not know $F$. That last reading made it the founding result of prior-independent mechanism design: Dhangwatnotai–Roughgarden–Yan turn the extra bidder into a single sample from $F$ used as a random reserve, which guarantees half of the optimal revenue without knowing $F$, and Hartline–Roughgarden and Fu–Immorlica–Lucier–Strack develop the comparison between simple and optimal mechanisms. The caveats are the assumptions: irregular distributions, bidders who may value the object below the seller, costly entry, and a seller who cannot commit all weaken it.

Connections:
- [[Myerson's optimal auction]]: the benchmark being beaten, and the marginal-revenue accounting (Bulow–Roberts) that does the work.
- [[Affiliated values and the linkage principle]]: the English auction's role in the affiliated version.
- [[Crémer–McLean]]: why the comparison with all mechanisms fails once signals are affiliated.
- Dhangwatnotai–Roughgarden–Yan (2015), Hartline–Roughgarden (2009), Fu et al. (2015), Roughgarden–Talgam-Cohen–Yan (2020): prior-independent auctions and the simple-versus-optimal literature.
- Klemperer (2002), "What Really Matters in Auction Design," *JEP*: the practical moral, attract entry and deter collusion.

## Affiliated values and the linkage principle

Years: 1977–82

Papers:
- Milgrom, P. R. and R. J. Weber (1982), "A Theory of Auctions and Competitive Bidding," *Econometrica* 50(5), 1089–1122.
- Wilson, R. (1969), "Competitive Bidding with Disparate Information," *Management Science* 15(7), 446–448; Wilson, R. (1977), "A Bidding Model of Perfect Competition," *Review of Economic Studies* 44(3), 511–518. The winner's curse in equilibrium and price convergence to the common value.
- Milgrom, P. R. (1979), "A Convergence Theorem for Competitive Bidding with Differential Information," *Econometrica* 47(3), 679–688; Milgrom, P. R. (1981), "Rational Expectations, Information Acquisition, and Competitive Bidding," *Econometrica* 49(4), 921–943. Information aggregation and the monotone likelihood ratio.
- Pesendorfer, W. and J. Swinkels (1997), "The Loser's Curse and Information Aggregation in Common Value Auctions," *Econometrica* 65(6), 1247–1281; Kremer, I. (2002), "Information Aggregation in Common Value Auctions," *Econometrica* 70(4), 1675–1682.

Question: When bidders' values depend on information held by others, so that winning is bad news, how do the standard auctions behave, which raises more revenue, and should a seller reveal what she knows?

Setting: $n$ bidders with signals $X_1,\dots,X_n$ and additional random variables $S=(S_1,\dots,S_m)$; bidder $i$'s value is $V_i=u(S,X_i,\{X_j\}_{j\ne i})$, nondecreasing, symmetric in the others' signals. Private values ($V_i=X_i$) and pure common values ($V_i=V$) are special cases. The joint density $f$ of $(S,X)$ is affiliated: $f(z\vee z')f(z\wedge z')\ge f(z)f(z')$ for all $z,z'$, which for a positive smooth density is log-supermodularity. Let $Y_1$ be the highest of the other signals and $v(x,y)=\mathbb{E}[V_1\mid X_1=x,\ Y_1=y]$. Formats: first-price sealed bid, second-price sealed bid, and the English (button) auction in which bidders observe the prices at which others drop out, each with and without the seller publicly revealing a signal $X_0$ affiliated with the rest.

Result: (1) Symmetric equilibria. Second-price: $b(x)=v(x,x)$, the value conditional on being tied with the strongest rival, which is below $\mathbb{E}[V_1\mid X_1=x]$: the winner's curse is priced in by conditioning on winning. English: with $k$ bidders left, bid up to the expected value given one's own signal, the drop-out signals already revealed, and the remaining $k-1$ rivals holding one's own signal. First-price: $b(x)=\int_{\underline x}^xv(\alpha,\alpha)\,dL(\alpha\mid x)$ with $L(\alpha\mid x)=\exp\!\big(-\int_\alpha^x\frac{f_{Y_1}(s\mid s)}{F_{Y_1}(s\mid s)}\,ds\big)$. (2) Revenue ranking: expected revenue in the English auction $\ge$ second-price $\ge$ first-price, with equality throughout under independent signals, which is revenue equivalence. (3) Linkage principle: in each format, a seller who commits to reveal her information raises expected revenue; more generally, the more closely the price paid by the winner is linked to information affiliated with her own, the higher the expected revenue. (4) Reserve prices and entry fees are analyzed in the same framework.

Work: Affiliation. It makes conditional expectations of nondecreasing functions nondecreasing in the conditioning variables and gives the monotone likelihood ratio property to the distribution of rivals' signals given one's own, which is what makes equilibrium bids monotone, makes the winner's curse a conditioning correction rather than a mistake, and makes the linkage inequality go the right way. Symmetry is needed too: with asymmetric bidders the ranking and the linkage principle can fail, as can both in multi-unit auctions (Perry–Reny 1999).

Proof: The linkage lemma. For an auction $A$ in which the highest signal wins, let $W^A(z,x)$ be the expected payment, conditional on winning, of a bidder with signal $x$ who bids as if her signal were $z$, with $W_2^A$ its derivative in the true signal. If $W_2^A(x,x)\ge W_2^B(x,x)$ for all $x$ and both equal zero at the lowest signal, then $W^A(x,x)\ge W^B(x,x)$ for all $x$. Both auctions have the same winning probability $G(z\mid x)$ as a function of the bid-as type, so the first-order conditions give $W_1^A(x,x)-W_1^B(x,x)=-\big(W^A(x,x)-W^B(x,x)\big)\frac{g(x\mid x)}{G(x\mid x)}$, and $\Delta(x)=W^A(x,x)-W^B(x,x)$ satisfies $\Delta'(x)\ge-\Delta(x)\frac{g(x\mid x)}{G(x\mid x)}$ with $\Delta(\underline x)=0$, hence $\Delta\ge 0$. Application. In the first-price auction the payment is one's own bid, so $W_2=0$. In the second-price auction the payment is $v(Y_1,Y_1)$, and by affiliation the distribution of $Y_1$ given $X_1=x$ and $Y_1<z$ rises with $x$, so $W_2\ge 0$. In the English auction the payment depends on all rivals' signals through their drop-out prices, which are affiliated with $X_1$, so $W_2$ is larger still. Revealing $X_0$ links the price to one more affiliated variable. Equilibrium bids are found by the same first-order conditions; $L(\cdot\mid x)$ in the first-price formula is the integrating factor.

Matters: It unified the theory of auctions with interdependent values and made the winner's curse, which Wilson had identified, part of equilibrium analysis rather than a behavioral failure; Kagel–Levin (1986) then showed in the laboratory that inexperienced bidders fall prey to it anyway. The revenue ranking gave a reason to prefer open ascending auctions, and the linkage principle told sellers to commit to disclosure, advice that shaped spectrum auctions and reserve-price practice. The companion literature on information aggregation, Wilson, Milgrom, Pesendorfer–Swinkels, Kremer, shows the price in a large common-value auction converging to the true value, the auction as a rational-expectations price. Affiliation also entered as a general tool: Milgrom–Weber's lemmas on affiliated variables are now standard in comparative statics.

Connections:
- [[Vickrey and the second-price auction]] and [[Myerson's optimal auction]]: the private-values theory this generalizes and the revenue equivalence it breaks.
- [[Auctions versus negotiations]]: the affiliated version of Bulow–Klemperer uses the English auction.
- [[Crémer–McLean]]: affiliation is correlation, and a seller using side bets can exploit it beyond the linkage principle.
- [[Efficient auctions with interdependent values]]: efficiency, rather than revenue, with interdependent values.
- Perry–Reny (1999), "On the Failure of the Linkage Principle in Multi-Unit Auctions," *Econometrica*; Krishna (2003) on asymmetric English auctions.
- Kagel–Levin (1986), "The Winner's Curse and Public Information in Common Value Auctions," *AER*.
- Bergemann–Brooks–Morris (2017), "First-Price Auctions with General Information Structures," *Econometrica*: revenue and welfare bounds over all information structures.

## Crémer–McLean

Years: 1985–88

Papers:
- Crémer, J. and R. P. McLean (1985), "Optimal Selling Strategies under Uncertainty for a Discriminating Monopolist When Demands Are Interdependent," *Econometrica* 53(2), 345–361.
- Crémer, J. and R. P. McLean (1988), "Full Extraction of the Surplus in Bayesian and Dominant Strategy Auctions," *Econometrica* 56(6), 1247–1257.
- McAfee, R. P. and P. J. Reny (1992), "Correlated Information and Mechanism Design," *Econometrica* 60(2), 395–421. Continuum of types, approximate extraction.
- Neeman, Z. (2004), "The Relevance of Private Information in Mechanism Design," *Journal of Economic Theory* 117(1), 55–77; Heifetz, A. and Z. Neeman (2006), "On the Generic (Im)Possibility of Full Surplus Extraction in Mechanism Design," *Econometrica* 74(1), 213–233; Chen, Y.-C. and S. Xiong (2013), "Genericity and Robustness of Full Surplus Extraction," *Econometrica* 81(2), 825–847. Whether the result is generic.
- Robert, J. (1991), "Continuity in Auction Design," *Journal of Economic Theory* 55(1), 169–179; Laffont, J.-J. and D. Martimort (2000), "Mechanism Design with Collusion and Correlation," *Econometrica* 68(2), 309–342. What restores information rents.

Question: Myerson's information rents come from independence. If bidders' types are correlated, so that each bidder's type carries information about the others', how much can the seller extract?

Setting: One object, $n$ bidders, finite type sets $T_i$, a common prior $\pi$ on $T=\prod_iT_i$ with full support, values $v_i(t)$ (private or interdependent), risk neutrality, unlimited liability. Let $\pi_i(\cdot\mid t_i)$ be $i$'s belief about $t_{-i}$ given her type. Full surplus extraction means a mechanism that is incentive compatible and interim individually rational and gives the seller expected revenue $\mathbb{E}[\max_iv_i(t)]$, the first-best surplus, so that every bidder of every type has zero expected rent. Two conditions on the prior. Full rank: for each $i$ the $|T_i|\times|T_{-i}|$ matrix $[\pi_i(t_{-i}\mid t_i)]$ has rank $|T_i|$. Convex independence: for each $i$ and $t_i$, $\pi_i(\cdot\mid t_i)$ is not a convex combination of $\{\pi_i(\cdot\mid t_i'):t_i'\ne t_i\}$.

Result: (1) Under full rank, any allocation rule implementable in dominant strategies, in particular the efficient rule via the Vickrey auction, can be supplemented with payments depending only on others' reports so that the resulting mechanism is dominant-strategy incentive compatible, interim individually rational, and extracts the full surplus. (2) Under convex independence, for every profile of valuations there is a Bayesian incentive compatible, interim individually rational mechanism extracting the full surplus; and if convex independence fails for some $i$ and $t_i$, there are valuations for which full extraction is impossible, so the condition is necessary and sufficient. Convex independence is generic among priors on finite type spaces, and independent types are the extreme case in which it fails everywhere. McAfee–Reny: with a continuum of types, under the analogous condition on conditional densities, the seller can extract all but $\varepsilon$ of the surplus for every $\varepsilon>0$.

Work: Correlation, risk neutrality and unlimited liability. Correlation means each type has a distinct belief about the others, so a bet on the others' reports can be made fair for one type and unfavorable for every other type; risk neutrality and unlimited liability mean the bet can be scaled up without cost to the truthful type and without limit to the deterrent. Common knowledge of the prior is the deeper assumption: the mechanism uses the exact beliefs of each type, which is what the robustness critique attacks.

Proof: Bayesian case. Fix $i$ and $t_i$. By convex independence and the separating hyperplane theorem there is a vector $z^{t_i}\in\mathbb{R}^{T_{-i}}$ with $z^{t_i}\cdot\pi_i(\cdot\mid t_i)<z^{t_i}\cdot\pi_i(\cdot\mid t_i')$ for every $t_i'\ne t_i$; subtracting a constant makes the first expectation zero and the others strictly positive. The mechanism: allocate efficiently, charge each bidder her value when she wins (so her rent before bets is zero at every type), and require a bidder who reports $t_i$ to accept the lottery $\lambda z^{t_i}(t_{-i})$ paid as a function of the others' reports. Under truth-telling the lottery has zero expected cost, so interim rationality holds with equality. A type $t_i'$ reporting $t_i$ bears expected cost $\lambda\,z^{t_i}\cdot\pi_i(\cdot\mid t_i')>0$, which for $\lambda$ large exceeds any gain from the misreport, so truth-telling is a Bayesian equilibrium. Dominant-strategy case. Start from the Vickrey auction, whose interim rents $U_i(t_i)$ are positive; full rank lets one solve $\sum_{t_{-i}}z_i(t_{-i})\pi_i(t_{-i}\mid t_i)=U_i(t_i)$ for all $t_i$ simultaneously, and charging $z_i(t_{-i})$ on top of the Vickrey payment leaves dominance intact (it does not depend on $i$'s report) and sets every interim rent to zero. Necessity. If $\pi_i(\cdot\mid t_i)$ is a convex combination of the other beliefs, any lottery that is fair for $t_i$ is fair on average for the mixture, so some other type gains from it, and valuations can be chosen so that type $t_i$ must be left a rent.

Matters: It showed that Myerson's rents are an artifact of independence rather than of private information as such, and that the Bayesian framework taken literally gives the seller implausible power. The response defined a research program. Robert, and Laffont–Martimort, show that risk aversion, limited liability or collusion restore rents. Neeman shows that extraction requires beliefs to determine preferences, so that two types with the same beliefs cannot have different values, and Heifetz–Neeman that in the universal type space this fails generically, while Chen–Xiong show the verdict depends on the notion of genericity. Most consequentially it motivated the Wilson doctrine in its modern form, Bergemann–Morris (2005) on robust mechanism design and Chung–Ely (2007) on dominant strategies as a response to a designer who does not know beliefs.

Connections:
- [[Myerson's optimal auction]]: the independent case whose rents this removes.
- [[Affiliated values and the linkage principle]]: a milder use of correlation, and the reason the linkage principle is not the end of the story.
- [[Auctions versus negotiations]]: full extraction is what breaks Bulow–Klemperer against all mechanisms under affiliation.
- Bergemann–Morris (2005), "Robust Mechanism Design," *Econometrica*; Chung–Ely (2007), "Foundations of Dominant-Strategy Mechanisms," *REStud*.
- Fu–Haghpanah–Hartline–Kleinberg (2021), "Full Surplus Extraction from Samples," *JET*: extraction when the prior is learned.

## Border's theorem

Years: 1984–2013

Papers:
- Border, K. C. (1991), "Implementation of Reduced Form Auctions: A Geometric Approach," *Econometrica* 59(4), 1175–1187.
- Matthews, S. A. (1984), "On the Implementability of Reduced Form Auctions," *Econometrica* 52(6), 1519–1522; Maskin, E. and J. Riley (1984), "Optimal Auctions with Risk Averse Buyers," *Econometrica* 52(6), 1473–1518. The conjecture and the first use.
- Border, K. C. (2007), "Reduced Form Auctions Revisited," *Economic Theory* 31(1), 167–181; Mierendorff, K. (2011), "Asymmetric Reduced Form Auctions," *Economics Letters* 110(1), 41–44. The asymmetric case.
- Che, Y.-K., J. Kim and K. Mierendorff (2013), "Generalized Reduced-Form Auctions: A Network-Flow Approach," *Econometrica* 81(6), 2487–2520. Hart, S. and P. J. Reny (2015), "Implementation of Reduced Form Mechanisms: A Simple Approach and a New Characterization," *Economic Theory Bulletin* 3(1), 1–8.

Question: An auction is summarized, for incentive purposes, by the interim allocation rules $Q_i(t_i)$, the probability that bidder $i$ of type $t_i$ wins averaged over the others' types. Which profiles $(Q_1,\dots,Q_n)$ can actually be produced by some allocation of a single object?

Setting: $n$ bidders with independent types $t_i\in T_i$ distributed according to $\lambda_i$. An allocation rule $p:T\to[0,1]^n$ with $\sum_ip_i(t)\le 1$ has reduced form $Q_i(t_i)=\int p_i(t_i,t_{-i})\,d\lambda_{-i}(t_{-i})$. A profile $Q$ is implementable if it is the reduced form of some $p$. Symmetric case: $T_i=T$, $\lambda_i=\lambda$, and $Q_i=Q$ for all $i$, implemented by a symmetric $p$.

Result: Symmetric case (conjectured by Matthews, proved by Border): $Q$ is implementable iff for every measurable $A\subseteq T$,
$$n\int_AQ\,d\lambda\ \le\ 1-\big(1-\lambda(A)\big)^n .$$
The left side is the probability that the winner has a type in $A$, the right side the probability that some bidder has a type in $A$. If $Q$ is nondecreasing it suffices to check upper sets $A=\{t\ge x\}$: $n\int_x^{\bar t}Q\,d\lambda\le 1-F(x)^n$ for all $x$. Asymmetric case (Border 2007, Mierendorff 2011, Che–Kim–Mierendorff 2013): $Q$ is implementable iff for all measurable $A_i\subseteq T_i$,
$$\sum_i\int_{A_i}Q_i\,d\lambda_i\ \le\ 1-\prod_i\big(1-\lambda_i(A_i)\big).$$
Che–Kim–Mierendorff extend the characterization to multiple units, capacity constraints and group-specific constraints with a paramodular structure, where the same inequalities hold with the right side replaced by the probability that the constraint set is reached.

Work: Necessity is counting: the winner's type lies in $A$ only if someone's type does. Sufficiency is the content, and it rests on the fact that the set of implementable reduced forms is the convex hull of the reduced forms of hierarchical rules, which rank types and give the object to the highest-ranked type present. Independence is what makes the interim rule a function of one's own type and the sets $A_i$ the right test family; symmetry collapses the family to subsets of a single type space.

Proof: Border's geometric argument, for finite types first. The set of feasible allocation rules is a polytope and the map $p\mapsto Q$ is linear, so the set $\mathcal Q$ of implementable reduced forms is a polytope. Its support function in the direction of weights $w_i(t_i)$ is $\max_p\sum_i\sum_{t_i}w_i(t_i)\lambda_i(t_i)Q_i(t_i)=\mathbb{E}\big[\max_iw_i(t_i)^+\big]$, attained by the hierarchical rule that gives the object to the bidder with the highest positive weight. For $0$–$1$ weights, indicators of sets $A_i$, this value is the probability that some $t_i\in A_i$, which gives the inequalities. The step that remains is that these directions suffice, that every facet of $\mathcal Q$ is normal to a $0$–$1$ direction, which Border proves by showing the hierarchical reduced forms are the extreme points of $\mathcal Q$ and analyzing the resulting polytope; a limiting argument handles general type spaces. Che–Kim–Mierendorff instead write implementation as a flow problem, types on one side and the object on the other with capacities given by $\lambda$, and the inequalities are the cut conditions of the max-flow min-cut theorem, which is where the paramodular generalization comes from. Hart–Reny give a short direct proof. In the symmetric case with quantiles $q=F(t)$, the condition reads $\int_x^1\tilde Q(q)\,dq\le\int_x^1q^{n-1}\,dq$ for all $x$: the interim rule is weakly majorized by the efficient one, which is the form [[Extreme points and majorization]] takes up.

Matters: It reduces the design of a single-object auction to the choice of $n$ one-dimensional functions subject to explicit inequalities, which is what makes problems with non-linear objectives or extra constraints tractable: risk-averse bidders (Maskin–Riley), budget constraints (Pai–Vohra 2014), the equivalence of Bayesian and dominant-strategy implementation (Manelli–Vincent 2010, Gershkov–Goeree–Kushnir–Moldovanu–Shi 2013), and the computation of optimal auctions in algorithmic mechanism design (Cai–Daskalakis–Weinberg 2012, Alaei et al. 2019). Its limits are instructive: Gopalan–Nisan–Roughgarden (2018) show that no characterization of this kind exists for public projects or for many multi-item settings unless the polynomial hierarchy collapses, so the single-object case is special.

Connections:
- [[Myerson's optimal auction]]: the interim rules whose feasibility this describes, and the monotone case where only upper sets matter.
- [[Extreme points and majorization]]: Border's symmetric condition as weak majorization, with the extreme points made explicit.
- [[Extreme points in multidimensional screening]]: what the extreme points look like once the single-object structure is gone.
- Maskin–Riley (1984), Matthews (1983, 1984): the origin in risk-averse bidders.
- Manelli–Vincent (2010), Gershkov et al. (2013): BIC–DIC equivalence. Pai–Vohra (2014): budgets.
- Cai–Daskalakis–Weinberg (2012), Alaei–Fu–Haghpanah–Hartline–Malekian (2019), Gopalan–Nisan–Roughgarden (2018): the algorithmic uses and the limits.

## Extreme points and majorization

Papers:
- Kleiner, A., B. Moldovanu and P. Strack (2021), "Extreme Points and Majorization: Economic Applications," *Econometrica* 89(4), 1557–1593.
- Hardy, G. H., J. E. Littlewood and G. Pólya (1929), "Some Simple Inequalities Satisfied by Convex Functions," *Messenger of Mathematics* 58, 145–152, and (1934) *Inequalities*. Majorization.
- Ryff, J. V. (1967), "Extreme Points of Some Convex Subsets of $L^1(0,1)$," *Proceedings of the AMS* 18, 1026–1034. Without monotonicity the extreme points are the rearrangements of $f$.
- Gentzkow, M. and E. Kamenica (2016), "A Rothschild–Stiglitz Approach to Bayesian Persuasion," *AER P&P* 106(5), 597–601; Dworczak, P. and G. Martini (2019), "The Simple Economics of Optimal Persuasion," *JPE* 127(5), 1993–2048. The persuasion side.
- Arieli, I., Y. Babichenko, R. Smorodinsky and T. Yamashita (2023), "Optimal Persuasion via Bi-Pooling," *Theoretical Economics* 18(1), 15–36; Kleiner, Moldovanu, Strack and Whitmeyer (2024), "The Extreme Points of Fusions"; Yang, K. H. and A. Zentefis (2024), "Monotone Function Intervals: Theory and Applications," *AER* 114(8), 2239–2270. The follow-ups.

Question: Many design problems, optimal auctions, persuasion with preferences over the posterior mean, delegation, contests, reduce to choosing a nondecreasing function that is majorized by, or majorizes, a given one. What are the extreme points of these sets, and what do the solutions therefore look like?

Setting: $\mathcal M$ is the set of nondecreasing integrable functions on $[0,1]$. For $f,g\in\mathcal M$, $f$ majorizes $g$, written $f\succeq g$, if $\int_x^1g\le\int_x^1f$ for all $x$ with equality at $x=0$; weak majorization $f\succeq_wg$ drops the equality. The sets are $MPS(f)=\{g\in\mathcal M:f\succeq g\}$, $MPS_w(f)$ the nonnegative nondecreasing functions weakly majorized by $f$, and $MPC(f)=\{g\in\mathcal M:g\succeq f,\ f(0)\le g\le f(1)\}$. When $f$ and $g$ are quantile functions, $g\in MPS(f)$ means the distribution of $g$ is a mean-preserving contraction of that of $f$, and $g\in MPC(f)$ a mean-preserving spread. All sets are convex and compact in $L^1$.

Result: (1) $g$ is an extreme point of $MPS(f)$ iff there is a countable collection of disjoint intervals $[x_i,\bar x_i)$ such that $g=f$ outside their union and on each interval $g$ equals the average of $f$ over that interval: $g$ is $f$ ironed on intervals. (2) For continuous $f$, $g$ is an extreme point of $MPC(f)$ iff there are disjoint intervals $[x_i,\bar x_i)$, subintervals $[y_i,\bar y_i)\subseteq[x_i,\bar x_i)$ and constants $v_i$ such that $g=f$ outside the intervals and on $[x_i,\bar x_i)$ takes the value $f(x_i)$ on $[x_i,y_i)$, $v_i$ on $[y_i,\bar y_i)$ and $f(\bar x_i)$ on $[\bar y_i,\bar x_i)$: a spread of $f$ to its endpoint values with at most one interior step. (3) Weak majorization adds the option of setting $g$ to zero on an initial segment. (4) Consequences by Bauer's maximum principle: a linear, or convex, objective over any of these sets is maximized at an extreme point, and for linear objectives $\int c\,g$ over $MPS(f)$ the maximizer is given by an ironing procedure of Myerson's type. (5) Applications. Symmetric single-object auctions: a nondecreasing interim allocation (in quantile space) is feasible iff it is weakly majorized by the efficient allocation $q\mapsto q^{n-1}$, which is [[Border's theorem]] in the symmetric case, and the revenue-maximizing rule is an extreme point, which is Myerson's ironed auction; the result extends to heterogeneous qualities. Persuasion: the distribution of posterior means is a mean-preserving contraction of the prior, so optimal persuasion with preferences over the posterior mean uses interval-pooling signals. Also optimal delegation (interval delegation sets), optimal stopping, mean-preserving spreads in decisions under risk, and allocation with externalities such as status prizes.

Work: Monotonicity. Without it the extreme points of $\{g:f\succeq g\}$ are the rearrangements of $f$ (Ryff), too many to say anything; with it, the majorization constraint can be slack only where $g$ is flat. The other ingredient is the duality between the design variable and the constraint: interim allocations, posterior-mean distributions and delegation sets are all nondecreasing functions, and feasibility in each case is a majorization relation against a benchmark, so one characterization serves many problems.

Proof: For $MPS(f)$. Let $g\in MPS(f)$ and let $C$ be the set of $x$ where $\int_x^1g=\int_x^1f$. On $C$ the two integrals agree, so $g=f$ almost everywhere on $C$ (where $C$ has density). The complement is a countable union of open intervals on which the constraint is slack. If $g$ were not constant on such an interval, one could add and subtract a small nondecreasing perturbation with zero integral on the interval (raise $g$ slightly on a right part, lower it on a left part) without violating monotonicity or the slack constraint, writing $g$ as the midpoint of two distinct elements of $MPS(f)$. So an extreme point is $f$ on $C$ and constant on each complementary interval, with the constant forced to be the average of $f$ there by the equalities at the endpoints. Conversely, if $g$ has this form and $g=\tfrac12(g_1+g_2)$ with $g_1,g_2\in MPS(f)$, then on $C$ both must equal $f$ (the constraint binds for $g$, so it binds for both) and on each interval both must be constant with the same average, so $g_1=g_2=g$. The $MPC(f)$ argument is similar with the constraints $g\succeq f$ and $f(0)\le g\le f(1)$ both able to bind, which produces the endpoint values and the single interior step. The applications then follow from Bauer's principle, that an upper semicontinuous convex functional on a compact convex set attains its maximum at an extreme point, and, for the explicit solution of linear problems, from the ironing argument in [[Myerson's optimal auction]].

Matters: A single theorem that recovers Myerson's ironing, Border's symmetric condition, interval delegation (Amador–Bagwell 2013) and the interval-pooling structure of optimal persuasion (Gentzkow–Kamenica, Dworczak–Martini), and that gives a method: identify the feasible set as a majorization set, read off its extreme points, apply Bauer. It started a line on extreme points of constrained function sets: bi-pooling under additional constraints (Arieli et al.), fusions and mean-preserving contractions of measures in higher dimension (Kleiner–Moldovanu–Strack–Whitmeyer), monotone function intervals (Yang–Zentefis), constrained majorization (Nikzad). Its limits are the limits of one dimension: with multidimensional types the extreme points of the feasible set are not tractable, which is the finding of [[Extreme points in multidimensional screening]].

Connections:
- [[Myerson's optimal auction]] and [[Border's theorem]]: the two classical results this reproduces.
- [[Extreme points in multidimensional screening]]: the multidimensional counterpart, where density replaces tractability.
- Ryff (1967): the role of monotonicity. Choquet, Bauer (1958): the general theory.
- Rothschild–Stiglitz (1970): mean-preserving spreads. Amador–Bagwell (2013): delegation. Moldovanu–Sela (2001): prize structures in contests.
- Dworczak–Martini (2019), Arieli et al. (2023), Candogan–Strack (2023): persuasion with posterior-mean preferences.

## Multidimensional screening

Years: 1987–2017

Papers:
- Rochet, J.-C. and P. Choné (1998), "Ironing, Sweeping, and Multidimensional Screening," *Econometrica* 66(4), 783–826.
- Armstrong, M. (1996), "Multiproduct Nonlinear Pricing," *Econometrica* 64(1), 51–75. Exclusion.
- Rochet, J.-C. (1987), "A Necessary and Sufficient Condition for Rationalizability in a Quasi-Linear Context," *Journal of Mathematical Economics* 16(2), 191–200; McAfee, R. P. and J. McMillan (1988), "Multidimensional Incentive Compatibility and Mechanism Design," *Journal of Economic Theory* 46(2), 335–354. Incentive compatibility in many dimensions.
- Manelli, A. M. and D. R. Vincent (2006), "Bundling as an Optimal Selling Mechanism for a Multiple-Good Monopolist," *Journal of Economic Theory* 127(1), 1–35; Manelli, A. M. and D. R. Vincent (2007), "Multidimensional Mechanism Design: Revenue Maximization and the Multiple-Good Monopoly," *Journal of Economic Theory* 137(1), 153–185.
- Daskalakis, C., A. Deckelbaum and C. Tzamos (2017), "Strong Duality for a Multiple-Good Monopolist," *Econometrica* 85(3), 735–767.
- Carroll, G. (2017), "Robustness and Separation in Multidimensional Screening," *Econometrica* 85(2), 453–488. Rochet–Stole (2003), "The Economics of Multidimensional Screening," in *Advances in Economics and Econometrics*, vol. 1: the survey.

Question: A seller faces a buyer whose private information has several dimensions, values for several goods or several quality attributes. Does Myerson's analysis carry over, and if not, what do optimal mechanisms look like?

Setting: Types $\theta\in\Theta\subset\mathbb{R}^m$ with density $f>0$, allocations $q\in Q\subseteq[0,1]^m$ (quantities, qualities, or probabilities of receiving each of $m$ goods for an additive buyer), payoff $\theta\cdot q-t$, seller's cost $C(q)$ (zero for the multi-good monopolist). By the taxation principle a mechanism is a menu, and the buyer's indirect utility is $u(\theta)=\max_q\{\theta\cdot q-t(q)\}$. Rochet's characterization: a mechanism is incentive compatible iff $u$ is convex with $\nabla u(\theta)=q(\theta)\in Q$ almost everywhere, and participation is $u\ge 0$. The seller's problem is therefore
$$\max_u\int_\Theta\big(\theta\cdot\nabla u(\theta)-u(\theta)-C(\nabla u(\theta))\big)f(\theta)\,d\theta\quad\text{over convex }u\ge 0\text{ with }\nabla u\in Q,$$
a calculus-of-variations problem with a convexity constraint. Integrating by parts, the revenue term is $\int u\,d\mu$ for the signed measure $\mu$ with density $-(m+1)f-\theta\cdot\nabla f$ in the interior of $\Theta$ and density $f\,(\theta\cdot\nu)$ on the boundary, $\nu$ the outward normal, the multidimensional virtual value.

Result: Armstrong: with $m\ge 2$, $\Theta$ strictly convex and $f$ bounded, the optimal tariff excludes a set of types of positive measure, however the lowest types are placed, because raising every price by $\varepsilon$ gains $\varepsilon$ on every served type while the types lost have surplus below $\varepsilon$ and measure of order $\varepsilon^m$. Rochet–Choné: bunching is generic. The convexity constraint binds on a set of positive measure, where types along one-dimensional segments receive the same allocation (second-degree bunching), and the solution for a square type space with quadratic cost has three regions, exclusion at the bottom, bunching along rays in the middle, full separation at the top; the "sweeping" procedure, a multidimensional ironing that moves the measure $\mu$ along the bunching segments until the relaxed solution becomes convex, constructs it. Manelli–Vincent: for the multi-good monopolist, deterministic menus can be suboptimal, the optimal mechanism may sell lotteries over bundles (also Thanassoulis 2004, Pavlov 2011); bundling is optimal for some distributions and not others; and the set of incentive-compatible mechanisms has extreme points of every menu size up to $m+1$ dense within mechanisms with menus of that size, every undominated mechanism being optimal for some distribution. Daskalakis–Deckelbaum–Tzamos: the monopolist's problem is the dual of an optimal transport problem, minimizing $\int\|\theta-\theta'\|_1\,d\gamma(\theta,\theta')$ over couplings whose marginal difference dominates $\mu$ in the convex order, strong duality holds, and the dual gives certificates of optimality; they characterize when grand bundling is optimal, solve several two-item examples, and exhibit independent two-item distributions for which the optimal menu is uncountable. Carroll: a seller who maximizes worst-case revenue over all joint distributions with given marginals sells the goods separately.

Work: The convexity constraint and the dimension of the binding participation set. In one dimension incentive compatibility is monotonicity of a single function and the participation constraint binds at one type, so the problem is pointwise after an envelope step. In $m\ge 2$ dimensions the envelope condition is a gradient, incentive compatibility is convexity of $u$, which is not a pointwise constraint, and the set where $u=0$ has positive measure with a free boundary. The measure $\mu$ has positive and negative parts whose balance along lines, not points, determines the solution, which is why ironing becomes sweeping and why closed forms exist only for special shapes and distributions. The reason extreme-point methods do not rescue the problem is in [[Extreme points in multidimensional screening]].

Proof: The common skeleton. Rochet: for quasilinear utility linear in the type, a direct mechanism $(q,t)$ is incentive compatible iff $u(\theta)=\theta\cdot q(\theta)-t(\theta)$ is convex and $q(\theta)\in\partial u(\theta)$ (cyclic monotonicity of $q$), which gives the formulation above. The divergence theorem turns $\int\theta\cdot\nabla u\,f$ into $\int_{\partial\Theta}u\,f\,(\theta\cdot\nu)\,d\sigma-\int_\Theta u\,\mathrm{div}(\theta f)\,d\theta$, hence $\int u\,d\mu$; in one dimension this is the virtual-value formula of [[Myerson's optimal auction]]. The relaxed problem ignores convexity and maximizes pointwise; where the relaxed solution is not convex, Rochet–Choné replace $\mu$ by a measure $\mu'$ with $\int u\,d\mu'\ge\int u\,d\mu$ for all convex $u$, obtained by sweeping mass along segments, and solve the relaxed problem for $\mu'$ with equality at the optimum, which is the Lagrangian treatment of the convexity constraint. Daskalakis–Deckelbaum–Tzamos make this exact: the constraint that $u$ be convex and $1$-Lipschitz in the $\ell_1$ norm (gradient in $[0,1]^m$) is dualized, the dual variables are a transport plan, and complementary slackness, $u(\theta)-u(\theta')=\|\theta-\theta'\|_1$ on the support of the plan, certifies optimality; the sweeping of Rochet–Choné is a particular transport plan. Armstrong's exclusion argument is the $\varepsilon$-shift computation above. Manelli–Vincent work directly with the convex set of incentive-compatible mechanisms and its extreme points.

Matters: It established that the multi-good problem has no Myerson: exclusion, bunching, randomization, infinite menus and non-monotone comparative statics ([[Selling multiple items: Hart–Nisan]]) are all generic features rather than pathologies, computing the optimum is intractable in general (Daskalakis–Deckelbaum–Tzamos 2014 show it is #P-hard even with independent items), and the one-dimensional tools, virtual values, reduced forms ([[Border's theorem]] has no general analogue), fail. That is why the subsequent literature splits into approximation ([[Selling multiple items: Hart–Nisan]]), robustness (Carroll's separation result, whose criterion is the maxmin one of [[Minimax]]), and geometry ([[Extreme points in multidimensional screening]]). On the applied side it is the theory behind mixed bundling (Adams–Yellen 1976, McAfee–McMillan–Whinston 1989) and multi-attribute nonlinear pricing (Wilson 1993).

Connections:
- [[Myerson's optimal auction]]: the one-dimensional case being generalized.
- [[Selling multiple items: Hart–Nisan]]: how much simple mechanisms lose.
- [[Extreme points in multidimensional screening]]: why the extreme points cannot be enumerated.
- [[Minimax]]: Carroll's worst-case criterion.
- Adams–Yellen (1976), McAfee–McMillan–Whinston (1989): bundling. Wilson (1993), *Nonlinear Pricing*.
- Thanassoulis (2004), Pavlov (2011): randomization. Daskalakis–Deckelbaum–Tzamos (2014): complexity.
- Jehiel–Moldovanu (2001) in [[Efficient auctions with interdependent values]]: multidimensional types in the efficiency problem.

## Selling multiple items: Hart–Nisan

Years: 2012–19

Papers:
- Hart, S. and N. Nisan (2017), "Approximate Revenue Maximization with Multiple Items," *Journal of Economic Theory* 172, 313–347. First version 2012 (arXiv 1204.1846; *ACM EC* 2012).
- Hart, S. and N. Nisan (2019), "Selling Multiple Correlated Goods: Revenue Maximization and Menu-Size Complexity," *Journal of Economic Theory* 183, 991–1029. First version 2013 (*ACM EC* 2013, "The Menu-Size Complexity of Auctions").
- Hart, S. and P. J. Reny (2015), "Maximal Revenue with Multiple Goods: Nonmonotonicity and Other Observations," *Theoretical Economics* 10(3), 893–922.
- Li, X. and A. C.-C. Yao (2013), "On Revenue Maximization for Selling Multiple Independently Distributed Items," *PNAS* 110(28), 11232–11237; Babaioff, M., N. Immorlica, B. Lucier and S. M. Weinberg (2020), "A Simple and Approximately Optimal Mechanism for an Additive Buyer," *Journal of the ACM* 67(4) (*FOCS* 2014). The sharpened bounds.
- Rubinstein, A. and S. M. Weinberg (2018), "Simple Mechanisms for a Subadditive Buyer and Applications to Revenue Monotonicity," *ACM TEAC* 6(3–4); Babaioff, M., Y. Gonczarowski and N. Nisan (2022), "The Menu-Size Complexity of Revenue Approximation," *Games and Economic Behavior* 134, 281–307.

Question: Since the revenue-maximizing mechanism for several goods is intractable and strange, how much revenue do the simple mechanisms, selling each good separately at its own price or selling the grand bundle at one price, give up, and what properties of the one-good problem survive?

Setting: One additive buyer and $k$ goods with values $X=(X_1,\dots,X_k)$, independent in the main results, with the value of a bundle $S$ equal to $\sum_{i\in S}X_i$. A mechanism is a menu of lotteries over bundles with prices; $\mathrm{Rev}(X)$ is the supremum of expected revenue over all incentive compatible and individually rational mechanisms, $\mathrm{SRev}(X)=\sum_i\mathrm{Rev}(X_i)$ is the revenue from selling separately at the optimal price for each good, and $\mathrm{BRev}(X)$ the revenue from the optimal price for the grand bundle. For one good $\mathrm{Rev}(X_1)=\sup_pp\,\Pr[X_1\ge p]$, Myerson's posted price.

Result: Hart–Nisan 2017: for two independent goods, $\mathrm{SRev}\ge\tfrac12\mathrm{Rev}$, and for two i.i.d. goods $\mathrm{SRev}\ge 0.73\,\mathrm{Rev}$; for $k$ independent goods $\mathrm{SRev}\ge c\,\mathrm{Rev}/\log^2k$; for $k$ i.i.d. goods $\mathrm{BRev}\ge c\,\mathrm{Rev}/\log k$, and bundling is asymptotically optimal as $k\to\infty$ for i.i.d. goods with finite mean; together with conditions under which bundling beats separate sales and an extension to several buyers. Li–Yao: $\mathrm{SRev}\ge c\,\mathrm{Rev}/\log k$, and the order $\log k$ is tight. Babaioff–Immorlica–Lucier–Weinberg: $\max\{\mathrm{SRev},\mathrm{BRev}\}\ge\tfrac16\mathrm{Rev}$ for every $k$ and every product distribution, so the better of the two simple mechanisms is a constant-factor approximation. Hart–Nisan 2019: with correlated values none of this holds; for two goods the revenue of every deterministic mechanism, and of every mechanism with a finite menu, can be an arbitrarily small fraction of $\mathrm{Rev}$, and the optimal mechanism may require an infinite menu. Hart–Reny: revenue is not monotone in the buyer's values; there are two-good distributions $G$ dominating $F$, in the sense that values are raised with probability one, with $\mathrm{Rev}(G)<\mathrm{Rev}(F)$, which cannot happen with one good; they also characterize revenue-maximizing and seller-favorable mechanisms in a way that avoids the non-differentiability of $u$, and explain through examples why lotteries help with several goods and not with one.

Work: Independence, and additivity. Independence makes the revenue from one good robust to what is learned about the others, which is what lets the revenue of any mechanism be charged, region by region of the type space, to the separate goods; the 2019 paper shows that without it the gap between optimal and simple is unbounded. The tail of the distribution is where the bounds lose: when one good has a large value, the mechanism is essentially selling that good alone, and when all values are moderate, the sum concentrates and the bundle price captures it. Additivity (or subadditivity, Rubinstein–Weinberg) keeps the bundle value from exceeding the sum.

Proof: Two lemmas carry the 2017 bounds. Marginal mechanism: $\mathrm{Rev}(X_1,X_2)\le\mathrm{Val}(X_1)+\mathrm{Rev}(X_2)$, where $\mathrm{Val}(X_1)=\mathbb{E}[X_1]$, since giving the buyer good 1 for free and running the restriction of the mechanism to good 2, for each realized $x_1$, is a mechanism for good 2 that loses at most $x_1$ relative to the original. Sub-domain stitching: for a partition of the type space into regions $D_j$, $\mathrm{Rev}(X)\le\sum_j\Pr[X\in D_j]\,\mathrm{Rev}(X\mid X\in D_j)$, since restricting a mechanism to a region is feasible for the conditional distribution. The two-good bound splits the plane along the diagonal and applies the marginal-mechanism lemma on each side with the roles of the goods exchanged, using $\mathrm{Val}(X_i\mid X_i\le X_j)$ against $\mathrm{Rev}(X_i)$. The $\log^2k$ bound partitions by which good has the largest value and by its scale, charges each region to separate revenue, and sums; Li–Yao's core–tail decomposition, with the core where all values are below a threshold and the tail where some value exceeds it, handles the core by a concentration bound on the sum and the tail by independence, which removes one logarithm. The non-monotonicity and the infinite-menu phenomena are exhibited by explicit small distributions and verified against the dual bounds. The i.i.d. bundling result is a law of large numbers: the bundle value concentrates around $k\,\mathbb{E}[X_1]$, which a single price captures.

Matters: It replaced the question "what is the optimal mechanism" with "how far is the optimum from what can be implemented," and gave the answer for independent additive values: within a constant of the better of two posted-price mechanisms. That is the positive result of the approximation program, and the correlated-goods and non-monotonicity results are the negative ones: no finite description, no comparative statics, in general. The techniques, charging revenue to sub-domains and to marginal mechanisms, core–tail decompositions, and the duality framework of Cai–Devanur–Weinberg (2016), are now standard, and the program extends to subadditive buyers (Rubinstein–Weinberg) and many buyers (Yao 2015, Cai–Zhao 2017), with menu-size complexity (Babaioff–Gonczarowski–Nisan) as the measure of how simple a near-optimal mechanism can be.

Connections:
- [[Multidimensional screening]]: the exact theory whose intractability motivates approximation.
- [[Myerson's optimal auction]]: the one-good benchmark, a posted price, and the monotonicity that fails.
- [[Extreme points in multidimensional screening]]: the geometric reason optimal mechanisms are complicated.
- Li–Yao (2013), Babaioff–Immorlica–Lucier–Weinberg (2020), Rubinstein–Weinberg (2018), Cai–Devanur–Weinberg (2016), Yao (2015), Cai–Zhao (2017).
- Daskalakis–Deckelbaum–Tzamos (2014): #P-hardness. Babaioff–Gonczarowski–Nisan (2022): menu size.
- Adams–Yellen (1976), Armstrong (1999), Bakos–Brynjolfsson (1999): bundling before the approximation program.

## Extreme points in multidimensional screening

Papers:
- Lahr, P. and A. Niemeyer (2024), "Extreme Points in Multi-Dimensional Screening," arXiv 2412.00649, revised October 2025.
- Manelli, A. M. and D. R. Vincent (2007), "Multidimensional Mechanism Design: Revenue Maximization and the Multiple-Good Monopoly," *Journal of Economic Theory* 137(1), 153–185. The first extreme-point treatment.
- Gale, D. (1954), "Irreducible Convex Sets," *Proceedings of the International Congress of Mathematicians*, Amsterdam, vol. 2, 217–218; Shephard, G. C. (1963), "Decomposable Convex Polyhedra," *Mathematika* 10, 89–95; Smilansky, Z. (1987), "Decomposability of Polytopes and Polyhedra," *Geometriae Dedicata* 24, 29–49. Indecomposable convex bodies.
- Schneider, R. (2014), *Convex Bodies: The Brunn–Minkowski Theory*, 2nd ed., Cambridge University Press, §3.2.

Question: In one dimension the extreme points of the set of incentive-compatible mechanisms are few and explicit, which is why optimal mechanisms are simple ([[Extreme points and majorization]]). What are the extreme points when types are multidimensional, and what does the answer imply for optimal mechanisms?

Setting: Linear screening. An allocation $a\in A\subset\mathbb{R}^d$, $A$ a $d$-dimensional polytope; an agent of type $\theta\in\Theta\subset\mathbb{R}^d\setminus\{0\}$ with payoff $a\cdot\theta$; a principal with payoff $a\cdot v(\theta)$ and a belief density $f$. Types on a ray have the same preferences, so $\Theta$ is normalized either to the sphere (no transfers: delegation, veto bargaining, scoring rules) or to $\theta_d=-1$ with the last coordinate of $a$ the transfer (monopoly pricing, bilateral trade); under the normalization $d$ allocation dimensions correspond to $(d-1)$-dimensional types, so $d=2$ is one-dimensional screening and $d\ge 3$ is multidimensional. A direct mechanism $x:\Theta\to A$ is incentive compatible if $x(\theta)\cdot\theta\ge x(\theta')\cdot\theta$ for all $\theta,\theta'$. Mechanisms are identified up to payoff equivalence; the set $\mathcal X$ of incentive-compatible mechanisms is convex and compact in $L^1$. The menu of $x$ is the support of its allocations, and the extended menu is $\mathrm{conv}(\mathrm{menu}(x))+\Theta^\circ$ with $\Theta^\circ$ the polar cone; incentive-compatible mechanisms, extended menus and indirect utilities (the support function $\theta\mapsto\sup_{y\in M}y\cdot\theta$) are affinely homeomorphic, so convex combinations of mechanisms are Minkowski averages of extended menus. A mechanism is exhaustive if there is no homothetic mechanism $\lambda x+t$ in $\mathcal X$ whose menu touches a superset of the facets of $A$ that $x$'s menu touches; for a non-constant mechanism this means the normals of the touched facets span $\mathbb{R}^d$ and the facets have empty intersection. A closed convex set $K$ is indecomposable if $K=\tfrac12K'+\tfrac12K''$ forces $K'$ and $K''$ to be homothetic to $K$ (Gale; Smilansky for unbounded sets with a common recession cone).

Result: (1) Every extreme point of $\mathcal X$ is exhaustive. (2) One dimension, $d=2$: every extreme point has a menu of at most $|\mathcal F|$ items, $\mathcal F$ the set of facets of $A$, and the extreme points are characterized explicitly (their Theorem 8). (3) Multidimensional, $d\ge 3$: most exhaustive incentive-compatible mechanisms are extreme points, where "most" means a dense $G_\delta$ subset in $L^1$; in particular the extreme points are dense in the exhaustive mechanisms. An exhaustive mechanism with a finite menu in general position whose menu items are non-separating is an extreme point, so finite-menu extreme points are dense in the exhaustive mechanisms, and most exhaustive mechanisms are extreme points with uncountable menus. (4) For every exhaustive $x$, every full-support $f$ and every $\varepsilon>0$ there are a mechanism $x'$ within $\varepsilon$ of $x$ and an objective $v$ for which $x'$ is uniquely optimal. Applications: in the multi-good monopoly problem the mechanisms that are the unique revenue maximizer for some type distribution are dense among all incentive-compatible, individually rational mechanisms; the same holds for delegation and veto bargaining with four or more alternatives. Every undominated incentive-compatible mechanism is optimal for some objective, which generalizes Manelli–Vincent.

Work: The dimension, through Minkowski decomposition. A mechanism is extreme iff its extended menu cannot be averaged from two other feasible extended menus, and decomposition of convex bodies is where the dimensions differ: in the plane the indecomposable bodies are segments and triangles, so extreme points are rare and explicit, while in $\mathbb{R}^d$ with $d\ge 3$ most convex bodies are indecomposable (Schneider) and so are polytopes whose vertices are in general position and non-separating. Exhaustiveness is the feasibility part: a menu that could be scaled or translated within $A$ decomposes trivially as the average of two homothetic copies, so an extreme point must press against the constraints of $A$ in every direction, which for a simplex means each alternative has probability zero somewhere in the menu. The indirect utility is the support function, which is what turns convex combinations of mechanisms into Minkowski sums and makes Gale's notion the right one.

Proof: Extreme implies exhaustive: if $\lambda x+t\in\mathcal X$ touches more facets than $x$, then $x$ is the midpoint of two distinct feasible homothetic mechanisms. Indecomposable and exhaustive implies extreme (their Lemma 4): a decomposition $x=\tfrac12x'+\tfrac12x''$ is a Minkowski decomposition of the extended menu, so $x'$ and $x''$ are homothetic to $x$, and exhaustiveness rules out non-trivial homothetic feasible copies; when $A$ is a simplex and $\Theta$ unrestricted the converse holds too. In the plane an extended menu is indecomposable iff it has at most three extreme points (two when $\Theta$ is restricted), which gives the one-dimensional menu bound. In $d\ge 3$, finite menus in general position are indecomposable iff non-separating (Lemma 6, after Shephard), such menus are dense among exhaustive mechanisms, and a Baire category argument lifts density of finite-menu extreme points to the dense-$G_\delta$ statement and to the uncountable-menu version. Unique optimality: extreme points of a compact convex set in $L^1$ are approximated by exposed points, each of which is the unique maximizer of some continuous linear functional, and a linear functional on $\mathcal X$ is an objective $\int x\cdot v\,f$; the applications then show that the relevant objectives are generated by type distributions.

Matters: It explains why multidimensional screening resists closed forms. Optimal mechanisms are extreme points, and in several dimensions almost every exhaustive mechanism is one and is the unique optimum for some nearby objective, so no structural property (finite menu, determinism, bundling, separation) is implied by optimality alone: any such property must come from the distribution, which is why results like those of [[Multidimensional screening]] and [[Selling multiple items: Hart–Nisan]] are either for special distributions or approximate. It also sharpens Manelli–Vincent, who had shown density of extreme points within bounded menu sizes and that undominated mechanisms are weakly rationalizable, by removing the menu-size restriction, delivering unique rather than weak rationalizability, and covering all linear screening problems, with or without transfers. And it connects mechanism design to a classical object, the decomposition of convex bodies, where the dimension-two versus dimension-three dichotomy was already known.

Connections:
- [[Extreme points and majorization]]: the one-dimensional case where extreme points are tractable.
- [[Multidimensional screening]] and [[Selling multiple items: Hart–Nisan]]: the phenomena this accounts for.
- [[Border's theorem]]: single-object interim rules, whose extreme points are hierarchical rules.
- Manelli–Vincent (2007): the precursor. Gale (1954), Shephard (1963), Smilansky (1987), Schneider (2014): indecomposability.
- Kleiner–Moldovanu–Strack–Whitmeyer (2024), "The Extreme Points of Fusions": extreme points of multidimensional mean-preserving contractions.

## Gross substitutes and ascending auctions

Years: 1982–2006

Papers:
- Kelso, A. S. and V. P. Crawford (1982), "Job Matching, Coalition Formation, and Gross Substitutes," *Econometrica* 50(6), 1483–1504.
- Gul, F. and E. Stacchetti (1999), "Walrasian Equilibrium with Gross Substitutes," *Journal of Economic Theory* 87(1), 95–124; Gul, F. and E. Stacchetti (2000), "The English Auction with Differentiated Commodities," *Journal of Economic Theory* 92(1), 66–95.
- Ausubel, L. M. (2004), "An Efficient Ascending-Bid Auction for Multiple Objects," *American Economic Review* 94(5), 1452–1475; Ausubel, L. M. (2006), "An Efficient Dynamic Auction for Heterogeneous Commodities," *American Economic Review* 96(3), 602–629.
- Milgrom, P. (2000), "Putting Auction Theory to Work: The Simultaneous Ascending Auction," *Journal of Political Economy* 108(2), 245–272.
- Demange, G., D. Gale and M. Sotomayor (1986), "Multi-Item Auctions," *Journal of Political Economy* 94(4), 863–872; Leonard, H. B. (1983), "Elicitation of Honest Preferences for the Assignment of Individuals to Positions," *Journal of Political Economy* 91(3), 461–479. The unit-demand case.
- Ausubel, L. M. and P. Milgrom (2002), "Ascending Auctions with Package Bidding," *Frontiers of Theoretical Economics* 1(1); Hatfield, J. W. and P. Milgrom (2005), "Matching with Contracts," *American Economic Review* 95(4), 913–935; Milgrom, P. and I. Segal (2020), "Clock Auctions and Radio Spectrum Reallocation," *Journal of Political Economy* 128(1), 1–31.

Question: With many heterogeneous indivisible goods and bidders who want bundles, does a competitive equilibrium exist, can an ascending auction find it, and can an ascending auction reach the Vickrey outcome?

Setting: A finite set $\Omega$ of indivisible goods, bidders $i$ with valuations $v_i:2^\Omega\to\mathbb{R}$, monotone with $v_i(\emptyset)=0$, quasilinear payoffs $v_i(S)-p(S)$ at prices $p\in\mathbb{R}^\Omega_+$, demand correspondence $D_i(p)=\arg\max_S\{v_i(S)-p(S)\}$ and indirect utility $V_i(p)=\max_S\{v_i(S)-p(S)\}$. Gross substitutes (Kelso–Crawford): for $p'\ge p$ and $S\in D_i(p)$ there is $S'\in D_i(p')$ containing every good in $S$ whose price did not rise. A Walrasian equilibrium is a price vector and a partition of $\Omega$ with each bidder receiving a demanded bundle. The Vickrey (VCG) payment of $i$ is the externality she imposes, the others' maximal welfare without her minus their welfare at the efficient allocation.

Result: Kelso–Crawford: in the firms-and-workers version with salaries, if firms' valuations satisfy gross substitutes, the salary-adjustment process in which firms make offers and workers hold the best converges to a core allocation, which is a competitive equilibrium, so the core is nonempty; Gale–Shapley and Shapley–Shubik are the special cases. Gul–Stacchetti 1999: gross substitutes is equivalent to the single improvement property (a non-demanded bundle can be improved by adding at most one good and removing at most one); if every bidder's valuation satisfies it, a Walrasian equilibrium exists and the set of equilibrium prices is a lattice, with a smallest element $\underline p$; and the class is maximal: if one bidder's valuation violates gross substitutes, there are unit-demand valuations for the others such that no equilibrium exists. Gul–Stacchetti 2000: an English auction that raises the prices of the goods in a minimal overdemanded set, generalizing Demange–Gale–Sotomayor, terminates at $\underline p$; the Vickrey payment of each bidder is at most the price of her bundle at $\underline p$, with equality in the unit-demand case (Leonard) and in large replica economies, and truthful demand reporting is then an equilibrium; but for $n\ge 3$ bidders and $m\ge 4$ goods no ascending auction, meaning any auction with nondecreasing price paths that depend only on the demands reported along the path, yields the Vickrey outcome for all gross-substitutes valuations. Ausubel 2004: for identical units and diminishing marginal values, a clock auction in which a bidder clinches a unit at the current price whenever the others' demand falls below the supply net of her clinched units implements the Vickrey outcome, with sincere bidding an ex post equilibrium; Ausubel 2006: for heterogeneous goods with gross substitutes, the Vickrey outcome is reached by running the price adjustment with every bidder and with each bidder removed in turn. Milgrom 2000: with gross substitutes, straightforward bidding in the simultaneous ascending auction ends within a bid increment of a competitive equilibrium, and the same maximal-domain argument shows that complements destroy existence, which is the exposure problem.

Work: Gross substitutes, which plays in the discrete setting the role it plays in [[Tâtonnement and stability]]: raising the prices of overdemanded goods never creates new excess demand elsewhere, so a monotone price adjustment converges. Technically it is equivalent to $V_i$ being submodular in $p$ (Ausubel–Milgrom) and to $v_i$ being $M^\natural$-concave (Fujishige–Yang 2003), which gives demand sets a matroid structure and makes the Lyapunov function below submodular. Quasilinearity and private values are the other assumptions; the Vickrey impossibility uses only that an ascending auction learns demands along a monotone path.

Proof: The Lyapunov function $L(p)=\sum_iV_i(p)+p(\Omega)$ is the seller's revenue plus bidders' surplus at prices $p$ if the goods were sold at those prices; by LP duality $L(p)\ge$ maximal welfare for all $p$, with equality exactly at Walrasian prices (Bikhchandani–Mamer 1997). Under gross substitutes $L$ is submodular, and the auctions of Gul–Stacchetti and Ausubel are steepest descent on $L$ along directions that raise the prices of a set of goods, which converges to the minimal minimizer $\underline p$; the matroid structure (the overdemanded sets form a lattice) is what makes the descent direction well defined and the process finite. Existence follows, as does the lattice property. Maximality: given a bidder whose demand violates gross substitutes at some price change, construct unit-demand bidders whose demands at those prices leave no price vector at which markets clear. Vickrey via clinching (Ausubel 2004): when the others' demand at price $p$ falls below supply minus $i$'s clinched units, the marginal unit's price $p$ equals the others' marginal value for it, which is the externality $i$ imposes, so cumulative clinching payments equal the Vickrey payment; sincere bidding is ex post optimal because a bidder's payments depend only on others' demand. The impossibility (Gul–Stacchetti 2000) is a three-bidder four-good family of valuations in which the price paths that two bidders would need in order to be charged their Vickrey payments must cross each other in both orders.

Matters: It is the theory behind the spectrum auctions: Milgrom's analysis of the simultaneous ascending auction, with activity rules and simultaneous closing, was the case for the FCC design of 1994, and the exposure problem it identifies is why package bidding (Ausubel–Milgrom), core-selecting auctions (Day–Milgrom 2008) and the combinatorial clock auction followed, with deferred-acceptance clock auctions (Milgrom–Segal) for the 2017 incentive auction. Gross substitutes became the central condition of market design more broadly, the substitutes condition of matching with contracts (Hatfield–Milgrom) and the bridge between auctions and two-sided matching that Kelso–Crawford opened, and it connected economics to discrete convex analysis (Murota). The Vickrey impossibility explains why dynamic auctions for heterogeneous goods either settle for minimal Walrasian prices or use Ausubel's nested runs.

Connections:
- [[Tâtonnement and stability]] and [[Existence of competitive equilibrium]]: the continuous theory this discretizes; gross substitutes is the same condition in both.
- [[Vickrey and the second-price auction]]: the outcome the ascending auctions try to reach.
- [[Efficient auctions with interdependent values]]: dynamic auctions once values are not private (Perry–Reny 2002, Ausubel 2004 with interdependence).
- Bikhchandani–Mamer (1997), Fujishige–Yang (2003), Murota (2003), *Discrete Convex Analysis*; Sun–Yang (2006): substitutes and complements together.
- Hatfield–Milgrom (2005), Hatfield–Kominers–Nichifor–Ostrovsky–Westkamp (2013): matching with contracts and trading networks.
- Day–Milgrom (2008), Ausubel–Cramton–Milgrom (2006), Leyton-Brown–Milgrom–Segal (2017): the designs.

## Efficient auctions with interdependent values

Years: 1992–2006

Papers:
- Maskin, E. (1992), "Auctions and Privatization," in H. Siebert (ed.), *Privatization*, Institut für Weltwirtschaft, 115–136.
- Dasgupta, P. and E. Maskin (2000), "Efficient Auctions," *Quarterly Journal of Economics* 115(2), 341–388.
- Jehiel, P. and B. Moldovanu (2001), "Efficient Design with Interdependent Valuations," *Econometrica* 69(5), 1237–1259.
- Perry, M. and P. J. Reny (2002), "An Efficient Auction," *Econometrica* 70(3), 1199–1212; Ausubel, L. M. (1999), "A Generalized Vickrey Auction," working paper; Krishna, V. (2003), "Asymmetric English Auctions," *Journal of Economic Theory* 112(2), 261–288.
- Jehiel, P., M. Meyer-ter-Vehn, B. Moldovanu and W. Zame (2006), "The Limits of Ex Post Implementation," *Econometrica* 74(3), 585–610; Bergemann, D. and S. Morris (2005), "Robust Mechanism Design," *Econometrica* 73(6), 1771–1813.

Question: When a bidder's value depends on others' private information, the Vickrey auction is no longer efficient and no longer dominant-strategy. Is there an auction, preferably one that does not depend on the details of the environment, that allocates efficiently, and when is efficiency unattainable altogether?

Setting: One object (or several), $n$ bidders. One-dimensional case: signals $s_i\in[0,1]$, values $v_i(s_1,\dots,s_n)$ nondecreasing in all signals, private values $v_i=s_i$ and common values $v_i=v$ as special cases. Maskin's single crossing: whenever $v_i(s)=v_j(s)=\max_kv_k(s)$, $\partial v_i/\partial s_i>\partial v_j/\partial s_i$, a bidder's own signal moves her own value more than her rivals'. Multidimensional case (Jehiel–Moldovanu): $K$ alternatives, agent $j$'s signal $s_j=(s_{1j},\dots,s_{Kj})$ with one component per alternative, independent across agents, and linear valuations $V^i_k(s)=\sum_j\alpha^i_{kj}\,s_{kj}$, with $\alpha^i_{kj}$ the weight of $j$'s signal in $i$'s value for alternative $k$ and $\alpha^i_{ki}\ge 0$. An allocation rule is efficient if it maximizes $\sum_iV^i_k$; the question is whether an efficient rule can be made Bayesian incentive compatible with some transfers.

Result: (1) Generalized Vickrey auction (Maskin 1992, Ausubel 1999, Dasgupta–Maskin): with one-dimensional signals and single crossing, give the object to the bidder with the highest value at the reported signals and charge her $v_i(s_i^*,s_{-i})$, where $s_i^*=\inf\{s_i:v_i(s_i,s_{-i})\ge\max_{j\ne i}v_j(s_i,s_{-i})\}$ is the lowest signal at which she still wins; truth-telling is an ex post equilibrium and the outcome is efficient. Dasgupta–Maskin build a detail-free version in which bidders submit bids contingent on others' values, so the auctioneer need not know the valuation functions or the distributions, extend it to multiple units with unit demands, and show by example that with multidimensional signals no efficient auction exists in general. (2) The English auction is efficient with two bidders under single crossing but not in general with three or more (Maskin 1992), unless a stronger condition holds (Krishna 2003); Perry–Reny give a two-stage ascending auction that is efficient with several units. (3) Jehiel–Moldovanu: with multidimensional signals and interdependent values, an efficient rule is Bayesian incentive compatible only if, for every agent $i$ and pair of alternatives $k,k'$ that tie somewhere in the interior,
$$\frac{\alpha^i_{ki}}{\alpha^i_{k'i}}=\frac{\sum_j\alpha^j_{ki}}{\sum_j\alpha^j_{k'i}},$$
the agent's private rate of substitution between alternatives equals the social one; the condition holds on a closed set of measure zero in the parameters, so efficient design is generically impossible. It holds under private values ($\alpha^j_{ki}=0$ for $j\ne i$) and under one-dimensional signals, where it reduces to a monotonicity requirement that holds on an open set. (4) Jehiel–Meyer-ter-Vehn–Moldovanu–Zame: with multidimensional signals and generic interdependent valuations, the only ex post implementable social choice functions are constant.

Work: One-dimensional signals with single crossing, which make the efficient allocation a threshold rule in each bidder's own signal and so make an ex post transfer, the value at the threshold, both feasible and incentive compatible. Interdependence by itself only removes dominance; it is the dimension of the signal that removes efficiency. With several components, incentive compatibility pins down the agent's interim utility along every direction in her signal space through an envelope condition, and the resulting vector field must be a gradient; an efficient rule switches alternatives along boundaries whose normals are determined by social values, and integrability forces them to be aligned with private values.

Proof: Generalized Vickrey. Fix $s_{-i}$. Single crossing makes $\{s_i:i\text{ wins}\}$ an upper interval $[s_i^*,1]$. If $s_i\ge s_i^*$, winning yields $v_i(s_i,s_{-i})-v_i(s_i^*,s_{-i})\ge 0$ by monotonicity, and if $s_i<s_i^*$, winning would cost more than it is worth; the payment does not depend on $i$'s report except through the win decision, so truth-telling is optimal against truthful rivals for every realization, which is ex post incentive compatibility. Jehiel–Moldovanu. For a Bayesian incentive compatible mechanism, agent $i$'s interim utility $U_i(s_i)$ has partial derivatives $\partial U_i/\partial s_{ki}=\alpha^i_{ki}\,q^i_k(s_i)$, with $q^i_k$ the interim probability of alternative $k$, so the vector field $(\alpha^i_{ki}q^i_k(s_i))_k$ must be conservative: $\alpha^i_{ki}\,\partial q^i_k/\partial s_{k'i}=\alpha^i_{k'i}\,\partial q^i_{k'}/\partial s_{ki}$. Under the efficient rule $q^i_k$ jumps where alternatives $k$ and $k'$ tie, across a hyperplane in $i$'s signal space with normal proportional to $\big(\sum_j\alpha^j_{ki},-\sum_j\alpha^j_{k'i}\big)$ in the $(s_{ki},s_{k'i})$ coordinates; a conservative field can jump only in the direction of its own normal, so the jump $(\alpha^i_{ki},-\alpha^i_{k'i})$ must be parallel to that normal, which is the congruence condition. Conversely, when the condition holds and the fields are monotone, transfers exist, built from the thresholds at which alternatives tie as in the one-dimensional construction.

Matters: It fixes the boundary of efficient auction design. On one side, the generalized Vickrey auction and its detail-free and dynamic implementations (Dasgupta–Maskin, Perry–Reny, Ausubel) show that interdependence alone is manageable, which mattered for privatization and spectrum sales where values are plainly interdependent. On the other, Jehiel–Moldovanu and Jehiel et al. show that multidimensional private information with interdependence makes efficiency, and ex post implementation of anything non-trivial, generically unattainable, so that in such environments design is about second best. It is also the clearest statement of what the Wilson doctrine asks for and what it costs: ex post implementation is possible in one-dimensional environments and almost nowhere else, which is where Bergemann–Morris's robust mechanism design begins.

Connections:
- [[Vickrey and the second-price auction]]: the private-values case being generalized.
- [[Affiliated values and the linkage principle]]: the same interdependent-values model with revenue rather than efficiency as the objective.
- [[Crémer–McLean]]: correlated signals and the other side of the robustness question.
- [[Multidimensional screening]]: multidimensional types as the obstacle in the revenue problem too.
- [[Gross substitutes and ascending auctions]]: the dynamic implementations.
- Bergemann–Morris (2005), Bikhchandani (2006), Chung–Ely (2007): ex post and robust implementation.
- Maskin (1992) and the Wilson doctrine: Wilson (1987), "Game-Theoretic Analyses of Trading Processes."
