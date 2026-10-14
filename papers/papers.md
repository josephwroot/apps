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
- Arrow (1953) is the complete-markets special case; Radner (1968) is the differential-information extension of Arrow–Debreu that shows why sequential markets are needed.
- Hart (1975): nonexistence without the bound, and Pareto-ranked equilibria.
- Duffie–Shafer (1985): generic existence for GEI. Cass (1984): existence with nominal assets, whose span does not depend on prices.
- Geanakoplos–Polemarchakis (1986): generic constrained suboptimality.
- Radner (1979): rational expectations equilibrium, where prices also carry information.
- Magill–Quinzii (1996), *Theory of Incomplete Markets*, is the book.

## Tâtonnement and stability

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
- Kelso–Crawford (1982), Gul–Stacchetti (1999, 2000), Ausubel (2006): gross substitutes and tâtonnement auctions with indivisibilities.

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
