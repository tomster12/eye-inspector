const EYES = [
	[
		50, 66, 5, 48, 62, 13, 75, 29, 24, 61, 42, 70, 66, 62, 32, 14, 81, 8, 15, 78, 2, 29, 13, 49, 1, 80, 82, 40, 63, 81, 21, 19, 0, 40, 51, 65, 26, 14, 21, 70,
		47, 44, 48, 42, 19, 48, 13, 47, 19, 49, 72, 31, 5, 24, 3, 43, 59, 67, 33, 49, 41, 60, 21, 26, 30, 5, 25, 20, 71, 11, 74, 56, 4, 74, 19, 71, 4, 51, 41, 43,
		80, 72, 54, 63, 79, 81, 15, 16, 44, 31, 30, 12, 33, 57, 28, 13, 64, 43, 48,
	],
	[
		80, 66, 5, 48, 62, 13, 75, 29, 24, 61, 42, 70, 66, 62, 32, 14, 81, 8, 15, 78, 2, 29, 13, 49, 1, 29, 11, 30, 52, 81, 21, 19, 0, 25, 26, 54, 20, 14, 21, 70,
		47, 44, 48, 42, 19, 48, 13, 47, 19, 49, 44, 26, 59, 77, 64, 43, 79, 28, 72, 64, 1, 30, 73, 23, 67, 6, 33, 25, 64, 81, 68, 46, 17, 36, 13, 17, 21, 68, 13, 9,
		46, 67, 57, 34, 62, 82, 15, 10, 73, 62, 2, 11, 65, 72, 37, 44, 10, 43, 68, 62, 9, 34, 18,
	],
	[
		36, 66, 5, 48, 62, 13, 75, 29, 24, 61, 42, 70, 66, 62, 32, 14, 81, 8, 15, 78, 2, 29, 13, 49, 1, 69, 76, 52, 9, 48, 66, 80, 22, 64, 57, 40, 49, 78, 3, 16,
		56, 19, 47, 40, 80, 6, 13, 64, 29, 49, 64, 63, 6, 49, 31, 13, 16, 10, 45, 24, 26, 77, 10, 60, 81, 61, 34, 54, 70, 21, 15, 4, 66, 77, 42, 37, 30, 22, 0, 11,
		41, 72, 57, 20, 23, 57, 65, 41, 23, 18, 72, 42, 5, 3, 26, 78, 8, 5, 54, 45, 77, 25, 64, 61, 16, 44, 54, 51, 20, 63, 25, 11, 26, 45, 53, 60, 38, 34,
	],
	[
		76, 66, 5, 49, 75, 54, 69, 46, 32, 1, 42, 60, 26, 48, 50, 80, 32, 24, 55, 61, 47, 12, 21, 12, 49, 54, 34, 25, 36, 15, 56, 55, 20, 9, 8, 62, 13, 82, 9, 44,
		29, 60, 53, 82, 42, 80, 5, 43, 71, 3, 80, 77, 47, 78, 34, 25, 62, 18, 10, 49, 62, 64, 52, 81, 11, 66, 62, 13, 47, 17, 52, 70, 26, 23, 32, 31, 64, 23, 35,
		32, 50, 6, 1, 25, 8, 37, 47, 43, 26, 76, 65, 68, 80, 17, 7, 45, 63, 14, 53, 63, 60, 16,
	],
	[
		63, 66, 5, 49, 75, 54, 2, 60, 29, 40, 78, 47, 60, 75, 67, 71, 60, 2, 65, 7, 47, 14, 45, 74, 59, 41, 80, 13, 60, 13, 81, 22, 35, 50, 40, 39, 2, 59, 48, 31,
		76, 2, 80, 75, 1, 56, 67, 11, 21, 8, 40, 65, 45, 75, 55, 39, 60, 42, 13, 3, 22, 57, 2, 6, 58, 9, 70, 1, 58, 56, 63, 68, 25, 79, 7, 20, 19, 64, 2, 66, 73,
		30, 71, 16, 12, 30, 65, 37, 20, 13, 22, 63, 18, 46, 64, 59, 41, 81, 82, 22, 78, 36, 47, 17, 4, 6, 17, 5, 36, 79, 63, 1, 64, 69, 15, 43, 4, 58, 56, 31, 14,
		64, 58, 18, 44, 78, 69, 1, 0, 46, 20, 71, 73, 25, 35, 8, 24,
	],
	[
		34, 66, 5, 49, 75, 54, 23, 74, 11, 13, 28, 26, 19, 48, 67, 57, 37, 60, 34, 28, 74, 10, 17, 32, 11, 18, 19, 43, 19, 81, 42, 4, 62, 9, 46, 49, 32, 51, 76, 58,
		4, 43, 47, 17, 67, 79, 21, 32, 44, 16, 30, 37, 26, 28, 41, 68, 57, 34, 51, 10, 69, 70, 8, 6, 46, 43, 18, 39, 47, 43, 15, 13, 33, 30, 35, 62, 37, 0, 37, 5,
		38, 55, 37, 13, 40, 25, 9, 21, 11, 64, 5, 79, 42, 68, 11, 71, 11, 48, 3, 67, 61, 40, 22, 14, 35, 50, 61, 39, 11, 2, 66, 49, 51, 53, 17, 73, 36, 75, 74, 54,
		24, 30, 54, 70,
	],
	[
		27, 66, 5, 49, 75, 54, 2, 60, 29, 40, 2, 55, 9, 15, 59, 18, 68, 3, 36, 5, 47, 77, 44, 38, 1, 18, 28, 76, 4, 34, 60, 63, 58, 80, 17, 54, 79, 75, 48, 54, 55,
		19, 62, 64, 14, 47, 51, 70, 75, 5, 11, 47, 45, 58, 68, 69, 79, 25, 38, 45, 73, 47, 68, 50, 34, 45, 78, 26, 79, 57, 4, 56, 22, 60, 18, 75, 43, 60, 59, 67,
		63, 42, 49, 33, 40, 65, 79, 77, 7, 3, 26, 62, 31, 78, 26, 57, 69, 40, 4, 23, 26, 13, 67, 42, 38, 72, 11, 39, 65, 60, 25, 6, 80, 66, 68, 77, 59, 78, 19,
	],
	[
		77, 66, 5, 49, 75, 54, 2, 60, 29, 40, 2, 55, 9, 15, 59, 18, 68, 3, 36, 5, 47, 60, 21, 80, 1, 72, 55, 16, 82, 35, 57, 19, 1, 66, 18, 27, 39, 17, 74, 81, 39,
		14, 78, 0, 25, 65, 43, 66, 64, 38, 81, 23, 24, 50, 57, 30, 71, 75, 26, 68, 54, 57, 56, 50, 71, 73, 14, 21, 8, 32, 26, 63, 5, 37, 19, 43, 66, 47, 53, 34, 66,
		23, 73, 31, 54, 38, 77, 67, 11, 63, 79, 6, 22, 21, 51, 69, 74, 21, 5, 17, 67, 37, 29, 21, 60, 14, 82, 44, 30, 4, 20, 42, 35, 1, 31, 54, 46, 20, 40, 30,
	],
	[
		33, 66, 5, 49, 75, 54, 2, 60, 29, 40, 2, 55, 9, 15, 59, 18, 68, 3, 36, 5, 47, 33, 21, 59, 44, 18, 28, 76, 59, 34, 60, 63, 79, 27, 12, 54, 5, 49, 48, 54, 55,
		52, 62, 72, 69, 10, 57, 22, 58, 48, 67, 53, 7, 34, 32, 30, 31, 19, 26, 8, 34, 46, 7, 30, 71, 55, 34, 75, 54, 9, 6, 60, 5, 23, 25, 45, 42, 80, 25, 12, 22,
		76, 20, 51, 62, 21, 40, 9, 41, 10, 44, 73, 8, 33, 70, 73, 6, 31, 21, 72, 5, 40, 61, 51, 42, 66, 64, 74, 61, 25, 63, 42, 24, 41,
	],
];

class Styles {
	static Disabled = { bg: null, fg: null };
	static StandardDark = { bg: null, fg: "#ffffff" };
	static StandardBright = { bg: "#8792a0", fg: "#3c3e3f" };

	static indexed(index) {
		const hueOffset = 140;
		const saturation = 30;
		const lightness = 50;

		const hue = (hueOffset + index * 137.508) % 360;
		const bg = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
		const fg = "#ffffff";
		return { bg, fg };
	}
}

class IdTracker {
	constructor(start) {
		this.next = start;
		this.available = [];
	}

	get() {
		if (this.available.length > 0) {
			return this.available.pop();
		}
		return this.next++;
	}

	give(value) {
		this.available.push(value);
	}
}

const HighlightMode = Object.fromEntries(["None", "Values", "SharedCT", "Isomorphs", "Allomorphs", "SharedPT"].map((k, i) => [k, i]));

// --------------------------------------------------------------------

function choose(n, k) {
	// n choose k binomial coefficient
	if (k > n / 2) k = n - k;
	let res = 1;
	for (let i = 1; i <= k; i++) {
		res *= (n - i + 1) / i;
	}
	return res;
}

function calculateIsomorphs(messages, maxLength = 30) {
	// pattern: { instances: [ [message, letter], ... ], score: 0 }
	let isomorphs = {};

	// For each (l0 + pattern length)
	for (let patternLength = 2; patternLength <= maxLength; patternLength++) {
		for (let msgIndex = 0; msgIndex < messages.length; msgIndex++) {
			for (let l0Index = 0; l0Index < messages[msgIndex].length - patternLength + 1; l0Index++) {
				let instance = messages[msgIndex].slice(l0Index, l0Index + patternLength);

				// Start and end values must have a repeat within the range
				if (instance[0] != instance[instance.length - 1]) {
					let foundStart = false;
					let foundEnd = false;
					for (let i = 1; i < instance.length - 1; i++) {
						if (instance[i] == instance[0]) foundStart = true;
						if (instance[i] == instance[instance.length - 1]) foundEnd = true;
						if (foundStart && foundEnd) break;
					}
					if (!(foundStart && foundEnd)) continue;
				}

				// Get pattern of letters that have repeats
				let letterMapping = {};
				let letterCounts = {};
				for (let letter of instance) {
					letterCounts[letter] = (letterCounts[letter] || 0) + 1;
				}
				let pattern = "";
				for (let letter of instance) {
					if (letterCounts[letter] > 1 && !letterMapping[letter]) {
						letterMapping[letter] = String.fromCharCode(65 + Object.keys(letterMapping).length);
					}
					pattern += letterMapping[letter] || ".";
				}

				// Now can track the instance of this isomorph
				if (!isomorphs[pattern]) isomorphs[pattern] = { instances: [] };
				isomorphs[pattern].instances.push([msgIndex, l0Index]);
			}
		}
	}

	// Requirements for score calculation
	const alphabetSize = new Set(messages.flat()).size;
	const totalMessageLength = messages.reduce((acc, msg) => acc + msg.length, 0);

	// Calculate score for each isomorph group
	for (let pattern in isomorphs) {
		const isomorph = isomorphs[pattern];
		const isomorphLength = pattern.length;
		const isomorphInstances = isomorph.instances.length;
		if (isomorphInstances === 1) continue;

		// Calculate how many repeats are inthe isomorph
		let isomorphLettersSeen = new Set();
		let internalRepeatCount = 0;
		for (let letter of pattern) {
			if (letter === ".") continue;
			if (!isomorphLettersSeen.has(letter)) {
				isomorphLettersSeen.add(letter);
			} else {
				internalRepeatCount++;
			}
		}

		if (internalRepeatCount === 1) continue;
		const isoProbability = 1 / Math.pow(alphabetSize, internalRepeatCount);

		// Assume binomially distributed occurrences across the length of the message
		// Calculate p(occurrences >= isomorphInstances)
		const trialCount = totalMessageLength - messages.length * isomorphLength;
		let totalProbability = 0.0;
		let lastProbability = 0.0;
		for (let occurrences = isomorphInstances; occurrences < isomorphInstances + 30; occurrences++) {
			totalProbability += choose(trialCount, occurrences) * Math.pow(1 - isoProbability, trialCount - occurrences) * Math.pow(isoProbability, occurrences);

			// Stop when we reach the precision limit
			if (totalProbability == lastProbability) break;
			lastProbability = totalProbability;
		}
		isomorph.score = -Math.log10(totalProbability);
	}

	return isomorphs;
}

function calculateAllomorphs(messages) {
	// { msg: letters[ allomorphs[ {gap,msg,letter} ] ] }
	let allomorphs = {};

	// Setup allomorph data
	for (let msgIndex in messages) {
		allomorphs[msgIndex] = [];
		for (let _ in messages[msgIndex]) {
			allomorphs[msgIndex].push([]);
		}
	}

	// For each repeat (l0 -> l1)
	for (let msg0Index = 0; msg0Index < messages.length; msg0Index++) {
		let msg0 = messages[msg0Index];

		for (let l0Index = 0; l0Index < msg0.length; l0Index++) {
			let l0 = msg0[l0Index];

			for (let l1Index = l0Index + 1; l1Index < msg0.length; l1Index++) {
				let l1 = msg0[l1Index];

				if (l0 == l1) {
					const gap = l1Index - l0Index;

					// For each conflicting repeat (l2 -> l3)
					for (let msg1Index = 0; msg1Index < messages.length; msg1Index++) {
						let msg1 = messages[msg1Index];

						for (let l2Index = 0; l2Index < msg1.length; l2Index++) {
							let l2 = msg1[l2Index];

							if (l2Index + gap < msg1.length) {
								let l3Index = l2Index + gap;
								let l3 = msg1[l3Index];

								if (l2 != l3) {
									allomorphs[msg0Index][l0Index].push({ gap, msg: msg1Index, letter: l2Index });
									allomorphs[msg1Index][l2Index].push({ gap, msg: msg0Index, letter: l0Index });
								}
							}
						}
					}
				}
			}
		}
	}

	return allomorphs;
}

function getAllomorphsForPosition(allAllomorphs, msgIndex, lIndex) {
	// For each conflict that includes this letter index
	let allomorphs = [];
	for (let fromIndex = 0; fromIndex < lIndex; fromIndex++) {
		const possibleConflicts = allAllomorphs[msgIndex][fromIndex];
		for (let conflict of possibleConflicts) {
			if (conflict.gap >= lIndex - fromIndex) {
				allomorphs.push(conflict);
			}
		}
	}
	return allomorphs;
}

function calculateShared(messages) {
	// We want to calculate shared columns between messages
	// But ensure the assigned values are consistent row-wise
	groups = {};
	let output = [];
	let ids = new IdTracker(1);

	for (let _ in messages) output.push([]);

	// Go through column at a time
	let col = 0;
	while (true) {
		// Group up messages by shared value
		let foundGroups = {};
		for (let msgIndex = 0; msgIndex < messages.length; msgIndex++) {
			let msg = messages[msgIndex];
			if (msg.length <= col) continue;
			if (!foundGroups[msg[col]]) foundGroups[msg[col]] = [];
			foundGroups[msg[col]].push(msgIndex);
		}

		// Gone past the end of all messages
		if (Object.keys(foundGroups).length == 0) break;

		// Try and assign each group a value
		for (let groupKey in foundGroups) {
			let group = foundGroups[groupKey];

			// Group is shared so we need a value > 0
			if (group.length > 1) {
				let id = null;

				// Try and reuse any existing ID if possible
				if (col > 0) {
					for (let msgIndex of group) {
						if (output[msgIndex][col - 1] != 0) {
							id = output[msgIndex][col - 1];
							break;
						}
					}
				}

				// Otherwise grab next ID
				if (id == null) id = ids.get();

				// Now assign for this group
				for (let msgIndex of group) {
					output[msgIndex].push(id);
				}
			}

			// Otherwise use 0
			else if (group.length == 1) {
				output[group[0]].push(0);
			}
		}

		col++;
	}

	return output;
}

// --------------------------------------------------------------------

class IsomorphGenerator {
	constructor(app) {
		this.app = app;
		this.isomorphs = {};
		this.onGenerate = null;
		this.maxLength = 30;
		this.minValues = 2;
		this.allowSharedSections = false;

		this.containerElement = document.getElementById("isomorph-generator");
		this.generateButtonElement = document.getElementById("isomorph-generator-generate-button");
		this.inputMaxLengthElement = document.getElementById("isomorph-generator-input-max-length");
		this.inputMinValuesElement = document.getElementById("isomorph-generator-input-min-values");
		this.inputSharedSectionsElement = document.getElementById("isomorph-generator-input-shared-sections");

		this.containerElement.addEventListener("keypress", (evt) => {
			if (evt.keyCode === 13) {
				evt.preventDefault();
				this.generate();
			}
		});

		this.generateButtonElement.onclick = () => this.generate();
	}

	async generate() {
		this.toggleGenerateButtonSpinner(true);

		this.maxLength = parseInt(this.inputMaxLengthElement.value);
		this.minValues = parseInt(this.inputMinValuesElement.value);
		this.allowSharedSections = this.inputSharedSectionsElement.checked;

		this.isomorphs = calculateIsomorphs(this.app.messages, this.maxLength);

		// Filter isomorphs that have:
		// - At least 2 instances
		// - At least minValues distinct letters
		// - At least 2 distinct sequences if allowSharedSections is false
		for (let pattern in this.isomorphs) {
			let letterSet = new Set(pattern.split("").filter((char) => char !== "."));
			if (letterSet.size < this.minValues) {
				delete this.isomorphs[pattern];
				continue;
			}

			if (!this.allowSharedSections && this.isomorphs[pattern].instances.length > 1) {
				let sequenceSet = new Set();
				for (let instance of this.isomorphs[pattern].instances) {
					const instanceList = this.app.messages[instance[0]].slice(instance[1], instance[1] + pattern.length);
					const instanceString = instanceList.join(",");
					sequenceSet.add(instanceString);
				}
				if (sequenceSet.size < 2) {
					delete this.isomorphs[pattern];
					continue;
				}
			}
		}

		// Filter out isomorphs with 1 instance if they have no similar isomorphs
		for (let pattern in this.isomorphs) {
			if (this.isomorphs[pattern].instances.length === 1 && (!this.generateSubPatterns || this.isomorphs[pattern].similarIsomorphs.length === 0)) {
				delete this.isomorphs[pattern];
			}
		}

		this.toggleGenerateButtonSpinner(false);
		if (this.onGenerate) this.onGenerate(this.isomorphs);
	}

	toggleGenerateButtonSpinner(toggle) {
		this.generateButtonElement.innerHTML = toggle ? "<div class='spinner'></div>" : "<div class='label'>Generate</div>";
	}
}

class IsomorphInspector {
	constructor(app, generator) {
		this.app = app;
		this.generator = generator;
		this.isomorphDisplays = {};
		this.selectedPattern = null;
		this.sortedIsomorphs = [];

		this.isomorphListElement = document.getElementById("isomorphs-inspector-list");
		this.isomorphInfoElement = document.getElementById("isomorphs-inspector-info");

		this.generator.onGenerate = () => this.recreateIsomorphElements();
	}

	recreateIsomorphElements(isomorphs) {
		this.sortedIsomorphs = [];
		this.selectIsomorph(null);

		if (Object.keys(this.generator.isomorphs).length == 0) {
			this.isomorphListElement.innerHTML = "<div class='empty'>No isomorphs...</div>";
		} else {
			this.sortedIsomorphs = Object.keys(this.generator.isomorphs).sort((a, b) => this.generator.isomorphs[b].score - this.generator.isomorphs[a].score);
			this.isomorphListElement.innerHTML = "";

			// Create an element for each isomorph
			for (let pattern of this.sortedIsomorphs) {
				let isomorphDisplay = {};

				isomorphDisplay.element = document.createElement("div");
				isomorphDisplay.element.classList.add("isomorph");

				isomorphDisplay.patternElement = document.createElement("div");
				isomorphDisplay.patternElement.classList.add("pattern");
				isomorphDisplay.patternElement.textContent = pattern;

				isomorphDisplay.labelElement = document.createElement("div");
				isomorphDisplay.labelElement.classList.add("label");
				let text = this.generator.isomorphs[pattern].instances.length.toString();
				if (this.generator.generateSubPatterns && this.generator.isomorphs[pattern].similarIsomorphs.length > 0) {
					let total = 0;
					for (let similarPattern of this.generator.isomorphs[pattern].similarIsomorphs) {
						total += this.generator.isomorphs[similarPattern].instances.length;
					}
					text += "(" + total + ")";
				}
				isomorphDisplay.labelElement.textContent = text;

				isomorphDisplay.scoreElement = document.createElement("div");
				isomorphDisplay.scoreElement.classList.add("score");
				isomorphDisplay.scoreElement.textContent = this.generator.isomorphs[pattern].score.toFixed(2);

				isomorphDisplay.element.appendChild(isomorphDisplay.patternElement);
				isomorphDisplay.element.appendChild(isomorphDisplay.labelElement);
				isomorphDisplay.element.appendChild(isomorphDisplay.scoreElement);
				isomorphDisplay.element.onclick = () => this.selectIsomorph(pattern);

				this.isomorphListElement.appendChild(isomorphDisplay.element);
				this.isomorphDisplays[pattern] = isomorphDisplay;
			}
		}

		this.isomorphInfoElement.innerHTML = "";

		let infoElement1 = document.createElement("div");
		infoElement1.textContent = "Total patterns: " + this.sortedIsomorphs.length;
		this.isomorphInfoElement.appendChild(infoElement1);

		let infoElement2 = document.createElement("div");
		let totalInstances = Object.values(this.generator.isomorphs).reduce((acc, val) => acc + val.instances.length, 0);
		infoElement2.textContent = "Total instances: " + totalInstances;
		this.isomorphInfoElement.appendChild(infoElement2);
	}

	selectIsomorph(pattern) {
		this.app.highlightMessagesUniform(Styles.Disabled);

		// Remove old isomorph highlighting
		if (this.selectedPattern != null) {
			if (this.isomorphDisplays[this.selectedPattern] != null) {
				this.isomorphDisplays[this.selectedPattern].element.classList.remove("selected");
			}
		}

		// Toggling current isomorph so just deselect
		if (this.selectedPattern == pattern) {
			this.selectedPattern = null;
			return;
		}

		this.selectedPattern = pattern;

		// Selecting a new isomorph
		if (this.selectedPattern != null) {
			this.isomorphDisplays[this.selectedPattern].element.classList.add("selected");
			let leftmostIndex = Infinity;
			let leftmostIndexMessage = null;

			for (let instance of this.generator.isomorphs[this.selectedPattern].instances) {
				if (instance[1] < leftmostIndex) {
					leftmostIndex = instance[1];
					leftmostIndexMessage = instance[0];
				}

				for (let i = 0; i < pattern.length; i++) {
					let symbol = pattern[i];
					if (symbol == ".") {
						this.app.setLetterStyle(instance[0], instance[1] + i, { ...Styles.StandardBright, highlighted: true });
					} else {
						let value = symbol.charCodeAt(0) - 64;
						this.app.setLetterStyle(instance[0], instance[1] + i, { ...Styles.indexed(value), highlighted: true });
					}
				}
			}

			// Scroll to leftmost visible instance
			const letterElement = this.app.messageListRows[leftmostIndexMessage].letters[leftmostIndex];
			this.app.scrollTo(letterElement);
		}
	}
}

class EyeInspectorApp {
	constructor(messages) {
		this.messages = messages;
		this.highlightMode = null;
		this.showAscii = false;
		this.isTightSpacing = false;
		this.isFullscreen = false;
		this.isIsomorphsConfigVisible = false;
		this.isIsomorphsInspectorVisible = false;

		// Setup sub elements
		this.isomorphGenerator = new IsomorphGenerator(this);
		this.isomorphInspector = new IsomorphInspector(this, this.isomorphGenerator);

		// Grab general element references
		this.panelContentElement = document.getElementById("messages-panel-content");
		this.messageListElement = document.getElementById("messages-list");
		this.messagesColumnIndicesElement = document.getElementById("messages-column-indices");
		this.messagesRowIndicesElement = document.getElementById("messages-row-indices");
		this.isomorphsConfigElement = document.getElementById("isomorph-generator");
		this.isomorphsInspectorElement = document.getElementById("isomorphs-inspector");

		// Setup toolbar
		this.highlightButtonElements = {
			[HighlightMode.None]: document.getElementById("toggle-highlight-none-button"),
			[HighlightMode.Values]: document.getElementById("toggle-highlight-values-button"),
			[HighlightMode.SharedCT]: document.getElementById("toggle-highlight-shared-ct-button"),
			[HighlightMode.Isomorphs]: document.getElementById("toggle-highlight-isomorphs-button"),
			[HighlightMode.Allomorphs]: document.getElementById("toggle-highlight-allomorphs-button"),
			[HighlightMode.SharedPT]: document.getElementById("toggle-highlight-shared-pt-button"),
		};

		this.showAsciiButtonElement = document.getElementById("toggle-show-ascii-button");
		this.tightSpacingButtonElement = document.getElementById("toggle-tight-spacing-button");
		this.fullscreenButtonElement = document.getElementById("toggle-fullscreen-button");

		for (const mode in this.highlightButtonElements) {
			this.highlightButtonElements[mode].onclick = () => this.setHighlightMode(mode);
		}
		this.showAsciiButtonElement.onclick = () => this.toggleShowAscii();
		this.tightSpacingButtonElement.onclick = () => this.toggleTightSpacing();
		this.fullscreenButtonElement.onclick = () => this.toggleFullscreen();

		// Setup config
		this.configPanelEmptyElement = document.getElementById("config-panel-empty");
		this.inspectorPanelEmptyElement = document.getElementById("inspector-panel-empty");

		// Initialise content
		this.messagesSharedCT = calculateShared(EYES);
		this.messagesAllomorphs = calculateAllomorphs(EYES);

		this.recreateMessageElements();
		this.toggleShowAscii(true);
		this.isomorphGenerator.generate();

		this.setHighlightMode(HighlightMode.Values);
	}

	recreateMessageElements() {
		this.messageListElement.innerHTML = "";
		this.messagesColumnIndicesElement.innerHTML = "";
		this.messagesRowIndicesElement.innerHTML = "";
		this.messageListRows = [];
		this.maxLength = 0;

		for (let msgIndex = 0; msgIndex < this.messages.length; msgIndex++) {
			this.maxLength = Math.max(this.maxLength, this.messages[msgIndex].length);

			let msgRow = {};
			msgRow.letters = [];
			msgRow.index = msgIndex;
			msgRow.element = document.createElement("div");
			msgRow.element.classList.add("message");

			// Create element for each letter in each row
			for (let lIndex = 0; lIndex < this.messages[msgIndex].length; lIndex++) {
				let letterElement = document.createElement("div");
				letterElement.textContent = this.messages[msgIndex][lIndex];
				letterElement.onmouseenter = () => this.onHoverLetter(msgIndex, lIndex);
				letterElement.onmouseleave = () => this.onUnhoverLetter(msgIndex, lIndex);

				msgRow.element.appendChild(letterElement);
				msgRow.letters.push(letterElement);
			}

			this.messageListElement.appendChild(msgRow.element);
			this.messageListRows.push(msgRow);

			// Create index element for each row
			let rowIndexElement = document.createElement("div");
			rowIndexElement.textContent = msgIndex.toString();
			this.messagesRowIndicesElement.appendChild(rowIndexElement);
		}

		// Create index element for each column
		for (let i = 0; i < this.maxLength; i++) {
			let rowIndexElement = document.createElement("div");
			rowIndexElement.textContent = i.toString();
			if (i.toString().length > 2) rowIndexElement.style.fontSize = "0.8em";
			this.messagesColumnIndicesElement.appendChild(rowIndexElement);
		}
	}

	// ------------------ Toolbar ------------------

	toggleShowAscii(value = null) {
		if (value == null) value = !this.showAscii;
		this.showAscii = value;
		this.showAsciiButtonElement.classList.toggle("active", this.showAscii);

		for (let msg = 0; msg < this.messages.length; msg++) {
			for (let letter = 0; letter < this.messages[msg].length; letter++) {
				const element = this.messageListRows[msg]?.letters[letter];
				const value = this.messages[msg][letter];
				element.textContent = this.showAscii ? String.fromCharCode(value + 32) : value;
			}
		}
	}

	toggleTightSpacing(value = null) {
		if (value == null) value = !this.isTightSpacing;
		this.isTightSpacing = value;
		this.tightSpacingButtonElement.classList.toggle("active", this.isTightSpacing);

		document.body.style.setProperty("--message-gap", this.isTightSpacing ? "0" : "0.4rem");
		document.body.classList.toggle("tight-spacing", this.isTightSpacing);
	}

	toggleFullscreen(value = null) {
		if (value == null) value = !this.isFullscreen;
		this.isFullscreen = value;

		this.fullscreenButtonElement.classList.toggle("active", this.isFullscreen);
		document.body.classList.toggle("fullscreen", this.isFullscreen);
	}

	setHighlightMode(mode) {
		if (mode == this.highlightMode) return;
		this.highlightMode = mode;

		if (mode == HighlightMode.Values) {
			this.highlightMessages(EYES);
		} else if (mode == HighlightMode.SharedCT) {
			this.highlightMessages(this.messagesSharedCT, "exclude");
		} else {
			this.highlightMessagesUniform(Styles.StandardDark);
		}

		if (mode == HighlightMode.Isomorphs || mode == HighlightMode.Allomorphs) {
			this.setIsomorphsConfigVisible(true);
			this.setIsomorphsInspectorVisible(true);
		} else {
			this.setIsomorphsConfigVisible(false);
			this.setIsomorphsInspectorVisible(false);
		}

		for (const mode in this.highlightButtonElements) {
			this.highlightButtonElements[mode].classList.toggle("active", mode == this.highlightMode);
		}
	}

	// ------------------ Letters ------------------

	highlightMessages(values, zeroAction = "include", zeroStyle = Styles.Disabled) {
		for (let msg = 0; msg < this.messages.length; msg++) {
			for (let letter = 0; letter < this.messages[msg].length; letter++) {
				const value = values[msg][letter];
				if (value == 0 && zeroAction == "exclude") {
					this.setLetterStyle(msg, letter, zeroStyle);
				} else {
					this.setLetterStyle(msg, letter, Styles.indexed(value));
				}
			}
		}
	}

	highlightMessagesUniform(style = Styles.StandardDark) {
		for (let msg = 0; msg < this.messages.length; msg++) {
			for (let letter = 0; letter < this.messages[msg].length; letter++) {
				this.setLetterStyle(msg, letter, style);
			}
		}
	}

	setLetterStyle(msg, letter, style) {
		const element = this.messageListRows[msg]?.letters[letter];
		element.style.backgroundColor = style.bg;
		element.style.color = style.fg;
		const highlighted = style.highlighted || false;
		element.classList.toggle("highlighted", highlighted);
	}

	onHoverLetter(msg, letter) {}

	onUnhoverLetter(msg, letter) {}

	scrollTo(element) {
		console.log(element);
		console.log(element.offsetLeft);
		this.panelContentElement.scrollLeft = element.offsetLeft - 100;
	}

	// ------------------ Configs ------------------

	setIsomorphsConfigVisible(visible) {
		this.isIsomorphsConfigVisible = visible;
		this.isomorphsConfigElement.style.display = visible ? "flex" : "none";

		let emptyVisible = !this.isIsomorphsConfigVisible;
		this.configPanelEmptyElement.style.display = emptyVisible ? "block" : "none";
	}

	// ------------------ Inspectors ------------------

	setIsomorphsInspectorVisible(visible) {
		this.isIsomorphsInspectorVisible = visible;
		this.isomorphsInspectorElement.style.display = visible ? "flex" : "none";

		let emptyVisible = !this.isIsomorphsInspectorVisible;
		this.inspectorPanelEmptyElement.style.display = emptyVisible ? "block" : "none";
	}
}

new EyeInspectorApp(EYES);
